import { SliderInfoProps } from "./index";
import styles from './SliderInfo.module.scss'

import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import './styles.css'
import 'swiper/scss'
import 'swiper/scss/navigation'
import { useEffect, useState } from "react";
import { useAtomValue } from "jotai";

export const SliderInfo = ({ id, arrayInfo, numAtom }: SliderInfoProps) => {
	const [isFading, setIsFading] = useState(false);
	const [displayedInfo, setDisplayedInfo] = useState(arrayInfo);
	const currentNum = useAtomValue(numAtom);

	useEffect(() => {

		setIsFading(true);

		const fadeOutTimer = setTimeout(() => {

			setDisplayedInfo(arrayInfo);

			setIsFading(false);
		}, 300);

		return () => clearTimeout(fadeOutTimer);
	}, [currentNum, arrayInfo]);

	return (
		<Swiper
			modules={[Navigation, FreeMode]}
			navigation
			freeMode={true}
			// cssMode
			spaceBetween={80}
			slidesPerView={3.2}
			key={id}
			className={`${styles.container} ${isFading ? styles.fadeOut : ''}`}
		>
			<div className={styles.container__content}>
				{displayedInfo.map((item) => (
					<SwiperSlide key={item.id}>
						<div className={styles.cardInfo}>
							<div className={styles.title}>{item.title}</div>
							<div className={styles.description}>{item.description}</div>
						</div>
					</SwiperSlide>
				))}
			</div>
		</Swiper>
	)
}
