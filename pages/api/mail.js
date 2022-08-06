import { createTransport } from "nodemailer";

export default async (req, res) => {
	const transporter = createTransport({
		service: "gmail",
		port: 465,
		secure: true,
		auth: {
			user: process.env.MAIL_USER,
			pass: process.env.MAIL_PASS,
		},
	});
	await transporter.sendMail({
		from: "contact@winds-n.com",
		to: "g.vivo.es.dur@gmail.com",
		subject: "お問い合わせ",
		text: req.body,
	});

	res.status(200).json({
		success: true,
	});
};
