import PolicyDataBase from '/Resources/JSON/PolicyDataBase-062626.json' with { type: 'json' }
import Descriptions from '/Resources/JSON/Descriptions-062626.json' with { type: 'json' }

function getUnique(JSON, Key){
    let UniqueValues = []
    for(let i=0; i<JSON.length; i++){
        if(!UniqueValues.includes(JSON[i][Key])){UniqueValues.push(JSON[i][Key])}
    }
    return UniqueValues
};

function getAssociated(JSON, NameKey, Name, AssociatedKey){
    const Filtered = JSON.filter(item => item[NameKey] === Name)
    return getUnique(Filtered, AssociatedKey)
}

function MatchDescription(Name){
    const Item = Descriptions.find(item => item.Name === Name)
    return Item.Description
}  

let SafeHomeReccs = getAssociated(PolicyDataBase, "Pillar", "Safe Homes", 'Recommendation')

SafeHomeReccs.forEach((Recc)=>{
    let PolicyTypes = getAssociated(PolicyDataBase, 'Recommendation', Recc, "Policy Action");
    console.log(PolicyTypes)
})