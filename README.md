Here’s the refactored **README** for the **Voice Recipe Search System** repository. This version improves readability, structure, and clarity while maintaining all the necessary details.

---

# 🍽️ Voice Recipe Search System  

<br/>
<p align="center">
    <a href="https://jquery.com/" >
        <img alt="JavaScript - jQuery" src="https://img.shields.io/static/v1.svg?label=JavaScripts&message=jQuery&color=blue" /></a>
    <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction" >
        <img alt="JavaScript - Web APIs" src="https://img.shields.io/static/v1.svg?label=JavaScripts&message=Web APIs&color=green" /></a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces" >
        <img alt="JavaScript - DOM" src="https://img.shields.io/static/v1.svg?label=JavaScript&message=DOM&color=violet" /></a>
    <a href="[https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction](https://wit.ai/)" >
        <img alt="Server-Side APIs - Wit.ai" src="https://img.shields.io/static/v1.svg?label=Server-Side APIs&message=Wit.ai&color=orange" /></a>
</p>
<br/>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [Recipe Intent Recognition with Wit.ai](#-recipe-intent-recognition-with-witai)
- [Wit.ai Concepts: Intents, Entities & Traits](#-witai-concepts-intents-entities--traits)
- [Spoonacular API Search Queries](#-spoonacular-api-search-queries)
- [State Flow Diagram](#-state-flow-diagram)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

The **Voice Recipe Search System** is a voice-enabled web application that allows users to search for recipes using natural language voice commands. With **JavaScript, jQuery, Web APIs, and Wit.ai**, this system understands user requests, processes spoken inputs, and fetches recipes from the **Spoonacular API**.

Users can speak into their device's microphone, specify ingredients or dish preferences, and instantly receive personalized recipe suggestions.

---

## 🚀 Features

- **🎤 Voice Recognition** – Uses the Web Speech API for hands-free recipe searching.
- **🧠 AI-Powered NLP** – Wit.ai interprets user intent to extract relevant search parameters.
- **🔍 Recipe Search** – Connects to the **Spoonacular API** for real-time recipe retrieval.
- **🖥️ User-Friendly Interface** – A clean, intuitive UI ensures smooth interaction.
- **📖 Multiple Recipe Options** – Presents a variety of recipe choices based on voice queries.

---

## 🛠️ Technologies Used

- **Frontend**: HTML, CSS, JavaScript, jQuery
- **Voice Processing**: Web Speech API
- **Natural Language Processing**: [Wit.ai](https://wit.ai/)
- **Recipe Database**: [Spoonacular API](https://spoonacular.com/food-api/docs)

---

## 📦 Getting Started

### Clone the Repository:

```bash
git clone https://github.com/solutions-for-realvalue/VoiceRecipeSearchSystem.git
```

### Open the Project:

```bash
cd VoiceRecipeSearchSystem
```

Then, open the `index.html` file in a web browser.

---

## 🎯 Usage

You can visit the live demo: **[Voice Recipe Search System](https://solutions-for-realvalue.github.io/VoiceRecipeSearchSystem/)**

### 🗣️ Using the Voice Search:

1. Click the **"Start Voice Search"** button.
2. Speak a command like:
   - *"Find recipes for chicken curry."*
   - *"How do I make pasta carbonara?"*
3. The system will process the command and display recipe suggestions.
4. Click on a recipe to see ingredients, instructions, and servings.

#### 🖼️ Screenshots

**Voice Recognition in Action**
  
![Voice Search](https://github.com/naturuplift/voice-recipe-search-system/assets/23546356/f67e767d-c732-4c42-ad5f-414dac6ac2d6)

**Recipe Results**
  
![Recipe Results](https://github.com/naturuplift/voice-recipe-search-system/assets/23546356/f4ac2269-0c72-409f-b161-eb832f8e37d1)

**Detailed Recipe View**
  
![Recipe Details](https://github.com/naturuplift/voice-recipe-search-system/assets/23546356/6c378ad7-0de4-43b7-92bc-08b33d57539d)

---

## 🤖 Recipe Intent Recognition with Wit.ai

To train the AI model:

1. **Create a Wit.ai Account**: [Sign up here](https://wit.ai/)
2. **Set Up Intents**: Train the AI model with different user inputs.
3. **Define Entities**: Extract ingredients, dish names, and cuisine types.
4. **Deploy & Integrate**: Connect Wit.ai with JavaScript to process user voice commands.

---

## 🔍 Wit.ai Concepts: Intents, Entities & Traits

| **Concept** | **Definition** | **Example** |
|------------|--------------|------------|
| **Intent** | The user's goal or action. | *"Find me a recipe for spaghetti Bolognese."* |
| **Entity** | Specific details extracted from speech. | `{dish: "spaghetti Bolognese"}` |
| **Trait** | Attributes that modify the intent. | `{difficultyLevel: "easy"}` |

✔ **Example Use Case**  
*User says: "Find me an easy recipe for chicken curry."*
- **Intent Detected**: `GetRecipe`
- **Entities Extracted**: `{dish: "chicken curry"}`
- **Traits Identified**: `{difficultyLevel: "easy"}`

---

## 🔗 Spoonacular API Search Queries

We mapped user intents from Wit.ai to Spoonacular API calls:

| **Intent** | **API Endpoint** | **Method** |
|-----------|----------------|------------|
| GetRecipe | `https://api.spoonacular.com/recipes/complexSearch` | GET |
| GetRecipeByIngredient | `https://api.spoonacular.com/recipes/findByIngredients` | GET |
| GetRandomRecipe | `https://api.spoonacular.com/recipes/random` | GET |

---


