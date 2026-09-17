function showMessage(message) {
    switch (message) {
        case 'Features':
            alert(
                `Khao Soi\n\n
                This Thai Coconut Curry Noodle Soup recipe (called Khao Soi) hails from Northern Thailand (Chiang Mai) where the weather stays a bit cooler. It’s a godsend when time is short or you are feeling a bit lazy, yet you crave something warm, rich, and spicy.\n\n
                Ingredients:\n
                - 1 lb chicken thighs, boneless and skinless\n
                - 2 tbsp vegetable oil\n
                - 1 onion, chopped\n
                - 3 cloves garlic, minced\n
                - 1 tbsp ginger, grated\n
                - 2 tbsp red curry paste\n
                - 1 tsp turmeric powder\n
                - 1 tsp curry powder\n
                - 4 cups chicken broth\n
                - 1 can (14 oz) coconut milk\n
                - 8 oz egg noodles\n
                - Salt and pepper to taste\n
                - Fresh cilantro, chopped (for garnish)\n
                - Lime wedges (for serving)\n`
            );
            break;
        case 'Description':
            alert(
                `This website showcases a variety of delicious recipes from around the world, with a focus on Thai cuisine.`
            );
            break;
        default:
            alert('Invalid message');
    }
}
