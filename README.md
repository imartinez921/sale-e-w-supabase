
## [Demo video here](https://vimeo.com/875813744?share=copy), as hackathon API access has already been revoked.

<hr>

## Inspiration
We spoke to real Square sellers to help brainstorm different problems that small businesses face, such as excess inventory. We were inspired by how we often get ads or emails for items that are unrelated to our interests, and how annoying that can be. 

## What it does
SALE-E is an AI tool that can look at the purchasing history of an entire registry of customers and see which customers might be inclined to buy a selected item of the Square Catalog if it were put on sale.

## How we built it
In 2.5 weeks:
- Held systems design meeting to decompose the project vision into delegated parts
- Collaborated using Github and pull requests for version control during product development
- Learned our respective technologies from ground zero: Vertex AI PaLM API, Next.js & Server Components, TailwindCSS
- Researched the auth process between Square API & Next.js
	- Created sandbox test account with Square to demo a Square vendor account
	- Scrapped auth process, deciding to limit app to demo Square vendor scope for time efficiency
- Utilized the Square API software development kit (SDK) to authorize our app with Square
    - Customers and products were sourced from demo Square vendor account
- Authorized app to use PaLM 2 large language model Bison through Vertex AI API
- Employed React dashboard library Tremor through TailwindCSS for creating the UX in a time-efficient manner
- Deployed seamlessly from GitHub repo to Vercel

## Challenges we ran into
- Figuring out real auth between Next.js & any Square vendor user took too much time since Square was considered a third-party OAuth provider, not one built in to NextAuth
- Having PaLM 2 return its data in proper format for use in the app

## Accomplishments that we're proud of
- A clean dashboard UI that displays information for the seller
- Getting PaLM 2 to suggest what customers might be most interested in an item

## What we learned
* How to use Next.js layouts to deliver static elements of the page
	* How to nest layouts
* How to use Next.js App Router to use folder hierarchy as app routes
* How to use Server Components to deliver data to Client Components
* How to use Vertex AI API to access PaLM 2
* How to customize TailwindCSS Tremor components based on the Tremor docs
* How to deploy a GitHub repo to Vercel

## What's next for SALE-E
Sometime in the future, we plan to build out the functionality to auto-send emails to the matched customers.
