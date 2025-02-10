export async function GET() {
	return new Response(
		JSON.stringify({
			profile: {
				account: 'jackbomb51@gmail.com',
				status: 'Working!',
				nickname: 'MyLittleChicken',
				push_notification: true,
				dark_mode: false
			}
		})
	)
}