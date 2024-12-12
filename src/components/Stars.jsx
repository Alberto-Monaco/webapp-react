export default function Stars({ vote }) {
	const stars = '★'.repeat(vote) + '☆'.repeat(5 - vote)
	return stars
}
