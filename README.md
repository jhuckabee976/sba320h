Marvel Character Match-Up

Description

Marvel Character Match-Up is a fun web application where users try to spot Marvel characters that randomly appear in the background. As the background changes every few seconds, users must match the characters by selecting from a list of thumbnails. Each time the character is spotted, the user clicks ‘YES’ to add to a running tally for how many times they’ve seen that character. This project uses the Marvel API to dynamically fetch character information and images.

Features

	•	Random Marvel Character Backgrounds: The background of the app displays random Marvel characters that change every few seconds.
	•	Spot the Character: Users can select the characters they see in the background from a list of thumbnails.
	•	Tally Counter: Each time the user clicks ‘YES,’ the tally next to the character increases to keep track of how many times the character has been spotted.
	•	Marvel API Integration: Uses the Marvel API to fetch real-time character data.

Technologies Used

	•	React.js: For building the UI components.
	•	Axios: For making API requests to the Marvel API.
	•	Marvel API: Provides character data and images.
	•	CSS: For styling the application.
	•	Netlify: For deployment.
	•	GitHub: For version control and code hosting.


Attribution

	•	Marvel API: Data provided by Marvel. © 2014 Marvel.
	•	Icons and Images: All character images and data are sourced from the Marvel API.

Known Issues

	•	If the API limit is exceeded, the app will return a “Too Many Requests” error. To avoid this, limit background calls or increase the delay between requests.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
