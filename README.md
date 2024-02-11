# Dynamic Price Card Component with React

## Overview
This React component, `PriceCard`, is designed to dynamically generate price cards based on the data provided through an array of objects. It utilizes React to efficiently render the components and display the pricing information in a structured format.

## Components
### PriceCard
- **Description**: This is the main component responsible for rendering the price cards.
- **Props**:
  - `dataObj`: An array of objects containing the pricing data.
- **Functionality**:
  - Maps through the `dataObj` array to dynamically generate price cards.
  - Each card displays information such as title, price, features, and a button.

## Implementation Details
1. **Component Structure**:
   - The component renders a series of price cards inside a container div.
   - Each card is structured with specific CSS classes for styling.
  
2. **Data Handling**:
   - Pricing data is provided to the component as an array of objects (`dataObj`).
   - Each object in the array represents a price card and contains properties such as `title`, `price`, `user`, `storage`, etc.

3. **Dynamic Rendering**:
   - Utilizes `map` function to iterate through the `dataObj` array and dynamically generate price cards based on the provided data.
   - Inserts data dynamically into the HTML elements of each card.

4. **Styling**:
   - CSS classes are applied to style the appearance of the price cards.
   - Uses Bootstrap classes (`row`, `col`, `card`, etc.) for layout and responsiveness.
   - Custom styles are defined in `priceCard.css` to enhance the presentation of the cards.

5. **Button Functionality**:
   - Each card includes a button element with a default label "BUTTON".
   - The button can be customized further based on specific requirements.

## Usage
To use this component in a React project:
1. Import the `PriceCard` component into your React application.
2. Provide the necessary pricing data as an array of objects to the `dataObj` prop.
3. Render the `PriceCard` component in the desired location within your application.

```javascript
import React from 'react';
import PriceCard from './path/to/PriceCard';

const App = () => {
    // Sample data
    const pricingData = [
        { title: "Basic", price: "$9.99", user: "Single User", storage: "5GB", project: "unlimited", projectIcon: "fa-solid fa-check", phone: "none", phoneIcon: "", subdomain: "", domain: "", monthly: "yes", monthlyicon: "fa-solid fa-check" },
        // Add more pricing data objects as needed
    ];

    return (
        <div>
            <h1>Pricing Options</h1>
            <PriceCard dataObj={pricingData} />
        </div>
    );
};

export default App;

```
## Dependencies
- **React**: This component is built using React library.
- **Bootstrap**: Utilizes Bootstrap classes for layout and styling.
- **FontAwesome**: Utilizes FontAwesome icons for check marks and other icons.

## Conclusion
The `priceCard` component provides a flexible and dynamic way to display pricing information in a React application. By providing data as an array of objects, developers can easily customize and extend the functionality of the price cards to suit their specific needs.
