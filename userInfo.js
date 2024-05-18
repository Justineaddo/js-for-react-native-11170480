
function createUserProfiles(names, modifiedNames) {
    let profiles = [];
    let id = 1;
    for (let i = 0; i < names.length; i++) {
      profiles.push({
        originalName: names[i],
        modifiedName: modifiedNames[i],
        id: id
      });
      id++;
    }
    return profiles;
  }
  
  let names = ["Ruth", "Kaycee", "Charlie"];
  let modifiedNames = ["RuTh", "KaYcEe", "ChArLiE"];
  console.log(createUserProfiles(names, modifiedNames));
