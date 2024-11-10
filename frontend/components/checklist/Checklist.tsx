import React from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';

// Custom Checklist Component
const Checklist = ({ items, onChange, customStyle }) => {
    const [checkedItems, setCheckedItems] = useState({});
  
    // Handle checkbox change
    const handleChange = (id) => {
      setCheckedItems((prevState) => {
        const newCheckedState = { ...prevState, [id]: !prevState[id] };
        if (onChange) onChange(newCheckedState); // Notify parent component
        return newCheckedState;
      });
    };
  
    return (
      <div style={customStyle?.container}>
        <h2>{customStyle?.title || 'Checklist'}</h2>
        <ul style={customStyle?.list}>
          {items.map((item) => (
            <li key={item.id} style={customStyle?.item}>
              <label style={customStyle?.label}>
                <input
                  type="checkbox"
                  checked={checkedItems[item.id] || false}
                  onChange={() => handleChange(item.id)}
                  style={customStyle?.checkbox}
                />
                {item.text}
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  };


const styles = StyleSheet.create({
    container: {
      flex: 0.10,
      width: '100%',  // Full width for the container
      backgroundColor: '#f8f8f8', // Example background color
      position: 'relative', 
    },
});

export default Checklist;