import * as Parser from './JsonParser.js'

export function CheckGroup({ name='name', value='value', taxonomy='taxonomy', checked = true, level=1}={}){
    const CheckGroup = document.createElement('div');
    CheckGroup.className = 'CheckGroup';
    CheckGroup.classList.add(`CheckGroupL${level}`);
    CheckGroup.dataset.taxonomy = taxonomy;
    CheckGroup.dataset.name = name;
    CheckGroup.dataset.checklevel = level;

    const CheckGroupHead = document.createElement('div');
    CheckGroupHead.className = 'CheckGroupHead';
    CheckGroup.appendChild(CheckGroupHead);

    const label = document.createElement('label');
    CheckGroupHead.appendChild(label);
    label.innerHTML = name;

    let input = document.createElement('input');
    input.type = 'checkbox';
    input.name = name;
    input.value = value;
    input.checked = checked;
    input.classList.add('filterValue');
    label.prepend(input);

    return CheckGroup;
}

export function CheckNested(ParentCheckGroup){
    const CheckNested = document.createElement('div');
    CheckNested.className = 'CheckNested';
    ParentCheckGroup.appendChild(CheckNested);

    const CheckGroupHead = ParentCheckGroup.querySelector(':scope > .CheckGroupHead');
    
    const toggleElement = document.createElement('input')
    toggleElement.type = "checkbox"
    toggleElement.classList.add('visToggle')


    const toggleLabel = document.createElement('label');
    toggleLabel.classList.add('visToggleLabel')
    toggleLabel.prepend(toggleElement)

    CheckGroupHead.appendChild(toggleLabel)

    return CheckNested;
}

export function ActionCard({Action="Action", DataControl="NA"}={}){
    const ActionCard = document.createElement('li');
    ActionCard.className = 'ActionCard';
    ActionCard.dataset.controller = DataControl;

    const Title = document.createElement('h3');
    Title.textContent = Action;
    ActionCard.appendChild(Title);

    return ActionCard;
}