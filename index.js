import express from	'express'

const app	= express()
const PORT = process.env.PORT ?? 8080

app.get('/', (req, res) => {
	return res.json({
		msg : 'Hello from the server, yoo>>> github actions s working...'
	})
})

app.listen(PORT, () => {
	console.log('Server is Up and Running on PORT 8080')
})