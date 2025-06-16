import { useAtom } from 'jotai';
import styles from './CircleButtons.module.scss';
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { CircleButtonsProps } from "./index";

const BUTTON_COUNT = 6;
const ANGLE_STEP_DEG = 360 / BUTTON_COUNT;
const ACTIVE_POSITION_DEG = -60;
const NAME_BUTTONS = ['Первый', 'Второй', 'Третий', 'Четвертый', 'Пятый', 'Шестой'];

export const CircleButtons = ({ numAtom }: CircleButtonsProps) => {
  const [num, setNumber] = useAtom(numAtom);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInitialRender = useRef(true);
  const [displayedName, setDisplayedName] = useState(NAME_BUTTONS[num - 1]);
  const [isNameVisible, setIsNameVisible] = useState(false);

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll('button');
    if (!elements) return;

    const centerX = 265;
    const centerY = 265;
    const radius = 265;

    elements.forEach((element, index) => {
      const angleRad = (index * ANGLE_STEP_DEG) * (Math.PI / 180);

      const x = centerX + radius * Math.cos(angleRad);
      const y = centerY + radius * Math.sin(angleRad);

      gsap.set(element, {
        position: 'absolute',
        x: x - 3,
        y: y - 3,
      });

      const buttonContent = element.querySelector(`.${styles.buttonContent}`);
      if (buttonContent) {
        gsap.set(buttonContent, {
          rotation: -(index * ANGLE_STEP_DEG),
        });
      }
    });

    const timer = setTimeout(() => {
      setIsNameVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const buttonInitialAngle = (num - 1) * ANGLE_STEP_DEG;
    const targetRotation = ACTIVE_POSITION_DEG - buttonInitialAngle;

    if (isInitialRender.current) {
      gsap.set(containerRef.current, { rotation: targetRotation });
      const elements = containerRef.current?.querySelectorAll(`.${styles.buttonContent}`);
      elements?.forEach(element => {
        gsap.set(element, { rotation: -targetRotation });
      });

      setDisplayedName(NAME_BUTTONS[num - 1]);

      isInitialRender.current = false;
      return;
    }

    setIsNameVisible(false);

    const rotationTimer = setTimeout(() => {
      gsap.to(containerRef.current, {
        rotation: targetRotation + "_short",
        duration: 0.8,
        ease: "power2.inOut",
      });

      const elements = containerRef.current?.querySelectorAll(`.${styles.buttonContent}`);
      elements?.forEach(element => {
        gsap.to(element, {
          rotation: -targetRotation,
          duration: 0.8,
          ease: "power2.inOut",
        });
      });

      const nameUpdateTimer = setTimeout(() => {
        setDisplayedName(NAME_BUTTONS[num - 1]);
        setIsNameVisible(true);
      }, 800);

      return () => clearTimeout(nameUpdateTimer);
    }, 300);

    return () => clearTimeout(rotationTimer);
  }, [num]);

  const handleButtonClick = (clickedNum: number) => {
    if (clickedNum === num) return;
    setNumber(clickedNum);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container} ref={containerRef} id="circle">
        {Array.from({ length: BUTTON_COUNT }, (_, i) => {
          const buttonNum = i + 1;
          const isActive = buttonNum === num;
          const buttonClasses = `${styles.button} ${isActive ? styles.active : ''}`;

          return (
            <button onClick={() => handleButtonClick(buttonNum)} className={buttonClasses} key={i}>
              <span className={styles.buttonContent}>{buttonNum}</span>
            </button>
          );
        })}
        <svg className={styles.circle} width="530" height="530" viewBox="0 0 530 530" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.2" cx="265" cy="265" r="264.5" stroke="#42567A" />
        </svg>
      </div>
      <div className={`${styles.buttonName} ${!isNameVisible ? styles.hidden : ''}`}>
        {displayedName}
      </div>
    </div>
  );
};
