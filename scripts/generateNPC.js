function generateNPC() {
    console.log("Function executed");
    // Fetch the checkbox values
    const includeName = document.getElementById('includeName').checked;
    const includeSurname = document.getElementById('includeSurname').checked;
    const includeDescription = document.getElementById('includeDescription').checked;
    const includeWantsAndNeeds = document.getElementById('includeWantsAndNeeds').checked;
    const includeSecretOrObstacle = document.getElementById('includeSecretOrObstacle').checked;
    const includeAlsoCarrying = document.getElementById('includeAlsoCarrying').checked;

    // NPC components
    const names = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Henry", "Isabel", "Jack"];
    const surnames = ["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor"];
    const descriptions = ["Mysterious wanderer", "Local bard", "Skilled artisan", "Inquisitive scholar", "Courageous knight", "Charming merchant", "Mischievous trickster", "Wise sage", "Enigmatic sorcerer", "Adventurous explorer"];
    const wantsAndNeeds = ["Seeking redemption", "Yearning for love", "Aiming for wealth", "In pursuit of knowledge", "Longing for adventure", "Desiring power", "Craving recognition", "Hoping for revenge", "Searching for purpose", "Dreaming of freedom"];
    const secretsOrObstacles = ["Haunted by the past", "Guardian of a hidden treasure", "Cursed by a dark spell", "Pursued by a powerful foe", "Bound by a solemn vow", "Hiding a forbidden love", "Entangled in political intrigue", "Haunted by a ghostly companion", "Bearing a magical curse", "Possessed by an otherworldly entity"];
    const alsoCarrying = ["A mysterious amulet", "An ancient map", "A tattered journal", "A small vial of unknown liquid", "A peculiar artifact", "A worn-out family heirloom", "A valuable gemstone", "A dusty spellbook", "A pocket watch with a secret compartment", "A strange-looking key"];

    // Generate NPC description based on checkbox selections
    let npcDescription = "NPC: ";
    if (includeName) npcDescription += names[Math.floor(Math.random() * names.length)] + " ";
    if (includeSurname) npcDescription += surnames[Math.floor(Math.random() * surnames.length)] + " ";
    if (includeDescription) npcDescription += descriptions[Math.floor(Math.random() * descriptions.length)] + " ";
    if (includeWantsAndNeeds) npcDescription += wantsAndNeeds[Math.floor(Math.random() * wantsAndNeeds.length)] + " ";
    if (includeSecretOrObstacle) npcDescription += secretsOrObstacles[Math.floor(Math.random() * secretsOrObstacles.length)] + " ";
    if (includeAlsoCarrying) npcDescription += alsoCarrying[Math.floor(Math.random() * alsoCarrying.length)];

    // Display the result
    document.getElementById('npcResult').textContent = npcDescription;
    
}
