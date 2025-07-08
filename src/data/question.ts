import type { Question } from "../types/quiez";

export const QUESTIONS: Question[] = [
	{
		question: "Apa ibukota negara Indonesia?",
		options: ["Surabaya", "Bandung", "Jakarta", "Medan"],
		correct: 2,
	},
	{
		question:
			"Planet manakah di tata surya yang dikenal sebagai 'Planet Merah'?",
		options: ["Venus", "Mars", "Jupiter", "Saturnus"],
		correct: 1,
	},
	{
		question: "Apa semboyan negara Republik Indonesia?",
		options: [
			"Merdeka atau Mati",
			"Garuda di Dadaku",
			"Bhinneka Tunggal Ika",
			"Satu Nusa Satu Bangsa",
		],
		correct: 2,
	},
	{
		question: "Siapakah penemu teori relativitas yang terkenal?",
		options: [
			"Isaac Newton",
			"Galileo Galilei",
			"Nikola Tesla",
			"Albert Einstein",
		],
		correct: 3,
	},
	{
		question: "Di negara manakah Menara Eiffel berada?",
		options: ["Italia", "Inggris", "Prancis", "Spanyol"],
		correct: 2,
	},
];
