> ![Logo Kinvo Premium](https://raw.githubusercontent.com/MatheusFoganholo/kinvo-premium/1fa820f889eff21dd2b813ff5a777bc3503e0aeb/src/assets/logo-xd.svg)

<br />
This repository stores the technical testing I performed for the full-fledged front-end developer position at Kinvo.

Result: I passed the test and later hired.

**The requirements were:**
<br/>

- Allow filtering of products in the section **My Fixed Income** from searches performed in the text field;
- Display real data obtained from API: `https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/getFixedIncomeClassData`;
- Allow ordering of products in the section **My Fixed Income** from the selector menu;
- Make use of the library [React](https://pt-br.reactjs.org/);
- Make use of the library [Styled Components](https://styled-components.com/);
- Page products (5 per page) in the **My Fixed Income** section.

**Note:** All requirements have been met.

**Extras I chose to add**

- [Skeleton Loading](https://www.npmjs.com/package/react-loading-skeleton) while the api is not loaded;
- Implementation of [Redux](https://redux.js.org/) in place of [React Context](https://pt-br.reactjs.org/docs/context.html) (added after test delivery);
- [Redux-saga](https://redux-saga.js.org/) (added after test delivery).

---

## How to run the application

You can access the application's web page by clicking [here](https://kinvo-premium.matheus.app/). Or if you want to run locally follow the steps below.

It is noteworthy that the system used to develop was MacOS. You may have to adapt something in the code to run on your operating system.

---

## Run locally

Clone the repository using:

```bash
git clone git@github.com:MatheusFoganholo/kinvo-premium.git
```

Navigate to the cloned project folder:

```bash
cd kinvo-premium
```

Install dependencies (using yarn):

```bash
yarn install
```

Or (using npm):

```bash
npm install
```

Run the project (using yarn):

```bash
yarn start
```

Or (using npm):

```bash
npm start
```

I hope you enjoy!

I keep making changes to practice new concepts and evolve this project because I like it a lot.
