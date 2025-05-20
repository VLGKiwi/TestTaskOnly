import { SliderInfoProps } from "./index";

export const SliderInfo = ({ id, arrayInfo }: SliderInfoProps) => {
    return (
				<div key={id}>
					{arrayInfo.map((item) => (
						<div key={item.id}>
							<div>{item.title}</div>
							<div>{item.description}</div>
						</div>
					))}
				</div>
    )
}
