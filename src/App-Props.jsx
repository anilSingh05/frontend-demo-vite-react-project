import './App.css'
import ProfileCard from './components/ProfileCard';

//  Uses of Props

const handleHobbyClick = (hobby) => {
    alert(`You clicked on ${hobby}`);
}

const person1 = {
    name: 'Jhon Doe',
    profession: 'Software Developer',
    age: 32,
    isMember: true,
    hobbies: ['Reading', 'Cooking', 'Traveling'],
    onHobbyClick:{handleHobbyClick}
};

const person2 = {
    name: 'Mike Matura',
    profession: 'Software Engineer',
    age: 32,
    isMember: false,
    hobbies: ['Reading', 'Coding', 'Movies'],
    onHobbyClick:{handleHobbyClick}
};

const person3 = {
    name: 'Anil Singh',
    profession: 'Software Developer',
    age: 32,
    isMember: true,
    hobbies: ['Photography', 'Music', 'Hiking'],
    onHobbyClick:{handleHobbyClick}
};

function App() {

    return  (
        <div>
            <h1>Hello World</h1>
            <ProfileCard {...person1} />
            <ProfileCard {...person2}/>
            <ProfileCard {...person3}/>
        </div>
    );

}

export default App;