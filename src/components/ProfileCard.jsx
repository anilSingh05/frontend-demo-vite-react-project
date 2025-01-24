
import PropTypes from 'prop-types';

// Learning Props  
// Props are used to pass data from one component to another component.
// Props are read-only and cannot be modified by the child component.
// Props are passed to components like function arguments.
// Props are passed to components like HTML attributes.
// Props are used to pass data from parent component to child component.
// Props are used to pass data from child component to parent component.
// Props are used to pass data from parent component to grandchild component.

// In the following example, we are passing the name, profession, age, and isMember props to the ProfileCard component.
// The ProfileCard component is a functional component that displays the profile card of a person.



function ProfileCard(props) {
  return (
    <div className="profile-card">
        <a href='https://www.flaticon.com/free-icon/developer_17752907'>Profile</a>
        <h2>Name: {props.name}</h2>
        <h3>Profession: {props.profession}</h3>
        <h4>Age: {props.age}</h4>
        <h4>Member: {props.isMember ? 'Yes' : 'No'}</h4>
        <h4>Hobbies:</h4>
        <ul>
            {props.hobbies.map((hobby, index) => {
                return <li key={index}
                    onClick={() => props.onHobbyClick(hobby)}>{hobby} </li>;
                })}
        </ul>
    </div>
  );
}

ProfileCard.propTypes = {
    name: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isMember: PropTypes.bool.isRequired,
    hobbies: PropTypes.array.isRequired
    };

export default ProfileCard;

// propTypes are used to specify the type of props that a component should receive.
// propTypes are used to validate the props that a component receives.
// propTypes are used to document the props that a component receives.
// propTypes are used to specify the default values of props.
// propTypes are used to specify the required props of a component.
// propTypes are used to specify the shape of an object prop.
// propTypes are used to specify the type of an array prop.
