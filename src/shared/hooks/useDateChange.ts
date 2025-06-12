'use client'
import { useEffect, useState } from "react"

import { PrimitiveAtom, useAtomValue } from "jotai"

export const useDateChange = (numAtom: PrimitiveAtom<number>) => {

	const [numChange, setNumChange] = useState(false)

	const previousNumber = useAtomValue(numAtom)
	const currentNumber = useAtomValue(numAtom)

	useEffect(() => {
		if (previousNumber !== currentNumber) {
			setNumChange(true)
		} else {
			setNumChange(false)
		}
	}, [currentNumber, previousNumber])

	return numChange
}
