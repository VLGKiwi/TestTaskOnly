export const useResolution = () => {
	if (window.innerWidth <= 465) {
		return 'mobile'
	}

	else if (window.innerWidth < 768) {
		return 'tabletSmall'
	}

	else if (window.innerWidth < 1200) {
		return 'tablet'
	}

	else if (window.innerWidth < 1440) {
		return 'desktop'
	}

	else if (window.innerWidth >= 1440) {
		return 'all'
	}
}
