'use client'
import React from "react";
import Select from "react-dropdown-select";

interface selectProps {
    className?: string;
}
const options = [
    { value: 'Accessories', label: 'Accessories' },
    { value: 'Category', label: 'Category' },
    { value: 'Products', label: 'Products' },

];


const SelectWithSearch: React.FC<selectProps> = ({ className }) => {
    return (
        <Select
            options={options}
            placeholder="Search.."
            className={className}
            values={[]}
            onChange={() => {}} />
    );
};

export default SelectWithSearch;
