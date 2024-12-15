import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';

// Dummy data for categories
const categoryData = [
    { id: 1, name: 'Fish', color: '#FF4500', image: require('../assets/fish.png') },
    { id: 2, name: 'Pork', color: '#FF6347', image: require('../assets/pork.png') },
    { id: 3, name: 'Chicken', color: '#8A2BE2', image: require('../assets/chicken.png') },
    { id: 4, name: 'Beef', color: '#4169E1', image: require('../assets/beef.png') },
    { id: 5, name: 'Goat', color: '#B22222', image: require('../assets/goat.png') },
    { id: 6, name: 'Snacks', color: '#3CB371', image: require('../assets/snacks.png') },
    { id: 7, name: 'Desserts', color: '#FF69B4', image: require('../assets/desserts.png') },
];

// Dummy data for recipes
const recipesData = [
    {
    id: 1, 
    category: 'Fish', 
    name: 'Grilled Fish', 
    image: require('../assets/Grilledfish.png'), 
    description: 'A refreshing Filipino ceviche made with fresh fish.',
    ingredients: ['Fresh fish', 'Vinegar', 'Onions', 'Ginger'],
    instructions: '1. Marinate fish in vinegar.\n2. Add onions and ginger.'
},
    { id: 2, 
    category: 'Pork', 
    name: 'Pork Adobo', 
    image: require('../assets/adobo.png'), 
    description: 'A refreshing Filipino ceviche made with fresh pork.',
    ingredients: ['Fresh fish', 'Vinegar', 'Onions', 'Ginger'],
    instructions: '1. Marinate fish in vinegar.\n2. Add onions and ginger.'
 },
    { id: 3, 
        category: 'Chicken', 
        name: 'Chicken Curry', 
        image: require('../assets/curry.png'), 
        description: 'A refreshing Filipino ceviche made with fresh chicken.',
        ingredients: ['Fresh fish', 'Vinegar', 'Onions', 'Ginger'],
        instructions: '1. Marinate fish in vinegar.\n2. Add onions and ginger.' },
        
    {  id: 4, 
        category: 'Beef', 
        name: 'Beef Stew', 
        image: require('../assets/stew.png'), 
        description: 'A refreshing Filipino ceviche made with fresh beef.',
        ingredients: ['Fresh fish', 'Vinegar', 'Onions', 'Ginger'],
        instructions: '1. Marinate fish in vinegar.\n2. Add onions and ginger.'},

    { id: 5, 
        category: 'Goat', 
        name: 'Goat Caldereta', 
        image: require('../assets/kambing.png'), 
        description: 'A refreshing Filipino ceviche made with fresh goat.',
        ingredients: ['Fresh fish', 'Vinegar', 'Onions', 'Ginger'],

        instructions: '1. Marinate fish in vinegar.\n2. Add onions and ginger.' },

    { id: 6, 
        category: 'Snacks', 
        name: 'Spring Rolls', 
        image: require('../assets/springrolls.png'), 
        description: 'A refreshing Filipino ceviche made with fresh ingredients.',
        ingredients: ['Fresh fish', 'Vinegar', 'Onions', 'Ginger'],
        instructions: '1. Marinate fish in vinegar.\n2. Add onions and ginger.' },

    { id: 7, 
        category: 'Desserts', 
        name: 'Mango Float', 
        image: require('../assets/mangofloat.png'), 
        description: 'A refreshing Filipino ceviche made with fresh ingredients.',
        ingredients: ['Fresh fish', 'Vinegar', 'Onions', 'Ginger'],
        instructions: '1. Marinate fish in vinegar.\n2. Add onions and ginger.' },
 

    { 
        id: 8, 
        category: 'Fish', 
        name: 'Kinilaw', 
        image: require('../assets/Kinilaw.png'), 
        description: 'A refreshing Filipino ceviche made with fresh fish.',
        ingredients: ['Fresh fish', 'Vinegar', 'Onions', 'Ginger'],
        instructions: '1. Marinate fish in vinegar.\n2. Add onions and ginger.'
    },
];

export default function HomeScreen() {
    const [activeCategory, setActiveCategory] = useState(null);
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    // Filter recipes based on the selected category
    const filteredRecipes = activeCategory
        ? recipesData.filter(recipe => recipe.category === activeCategory)
        : recipesData;

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar barStyle="dark-content" backgroundColor="white" />

            {selectedRecipe ? (
                <View style={{ flex: 1, backgroundColor: 'white', padding: 20, marginTop:20 }}>
                    <TouchableOpacity onPress={() => setSelectedRecipe(null)}>
                        <Text style={{ color: '#FF4500', fontWeight: 'bold', fontSize: hp(2.5) }}>Back to Recipes</Text>
                    </TouchableOpacity>
                    <Image source={selectedRecipe.image} style={{ height: hp(25), width: '100%', borderRadius: 10, marginVertical: 20 }} />
                    <Text style={{ fontSize: hp(3), fontWeight: 'bold' }}>{selectedRecipe.name}</Text>
                    <Text style={{ fontSize: hp(2), color: '#555', marginVertical: 10 }}>{selectedRecipe.description}</Text>
                    <Text style={{ fontSize: hp(2.5), fontWeight: 'bold', marginTop: 10 }}>Ingredients:</Text>
                    {selectedRecipe.ingredients.map((item, index) => (
                        <Text key={index} style={{ fontSize: hp(2), color: '#333' }}>• {item}</Text>
                    ))}
                    <Text style={{ fontSize: hp(2.5), fontWeight: 'bold', marginTop: 10 }}>Instructions:</Text>
                    <Text style={{ fontSize: hp(2), color: '#333' }}>{selectedRecipe.instructions}</Text>
                </View>
            ) : (
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 50, paddingTop: 50 }}>
                    {/* Header */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, marginBottom: 20, justifyContent: 'space-between' }}>
                        <Image source={require('../assets/avatar.png')} style={{ height: hp(4), width: hp(4), marginRight: 10 }} />
                        <Text style={{ fontSize: hp(2), fontWeight: 'bold', color: '#000' }}>Home Screen</Text>
                        <Image source={require('../assets/bell.png')} style={{ height: hp(4), width: hp(4), marginLeft: 10 }} />
                    </View>

                    {/* Greetings */}
                    <Text style={{ fontSize: hp(2.5), fontWeight: 'normal', color: '#000', marginLeft: 20 }}>Hello, Chef!</Text>
                    <Text style={{ fontSize: hp(4), fontWeight: 'normal', color: '#000', marginLeft: 20 }}>
                        Make your own food, stay at <Text style={{ fontWeight: 'bold', color: '#FFA500' }}>home.</Text>
                    </Text>

                    {/* Search Bar */}
                    <View style={{ marginHorizontal: 16, flexDirection: 'row', alignItems: 'center', borderRadius: 25, backgroundColor: 'rgba(0, 0, 0, 0.05)', padding: 8 }}>
                        <TextInput placeholder='Search any recipe' placeholderTextColor='gray' style={{ flex: 1, fontSize: hp(1.7), color: '#000', paddingHorizontal: 10 }} />
                        <Image source={require('../assets/magnifyingglass.png')} style={{ height: hp(4), width: hp(4), marginLeft: 10 }} />
                    </View>

                    {/* Categories Section */}
                    <Text style={{ fontSize: hp(2.5), fontWeight: 'bold', color: '#000', marginLeft: 20, marginTop: 20 }}>Categories</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 10, paddingLeft: 20 }}>
                        {categoryData.map((category) => (
                            <TouchableOpacity
                                key={category.id}
                                style={{
                                    marginRight: 10,
                                    backgroundColor: category.color,
                                    padding: 10,
                                    borderRadius: 20,
                                    alignItems: 'center',
                                    width: wp(25),
                                    borderWidth: activeCategory === category.name ? 2 : 0,
                                    borderColor: activeCategory === category.name ? '#000' : 'transparent',
                                }}
                                onPress={() => setActiveCategory(activeCategory === category.name ? null : category.name)}
                            >
                                <Image source={category.image} style={{ height: hp(6), width: hp(6), marginBottom: 5 }} />
                                <Text style={{ color: 'white', fontSize: hp(2), fontWeight: 'bold', textAlign: 'center' }}>{category.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    {/* Recipes Section */}
                    <Text style={{ fontSize: hp(2.5), fontWeight: 'bold', color: '#000', marginLeft: 20, marginTop: 20 }}>
                        {activeCategory ? `${activeCategory} Recipes` : 'All Recipes'}
                    </Text>
                    {filteredRecipes.map(recipe => (
                        <TouchableOpacity key={recipe.id} onPress={() => setSelectedRecipe(recipe)}>
                            <View style={{ flexDirection: 'row', padding: 15, marginHorizontal: 20, backgroundColor: '#f9f9f9', marginVertical: 5, borderRadius: 10 }}>
                                <Image source={recipe.image} style={{ height: hp(10), width: hp(10), marginRight: 10, borderRadius: 5 }} />
                                <View>
                                    <Text style={{ fontSize: hp(2), color: '#333' }}>{recipe.name}</Text>
                                    <Text style={{ fontSize: hp(1.8), color: '#666' }}>{recipe.description}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            )}
        </View>
    );
}