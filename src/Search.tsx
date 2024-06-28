import { AccordionDetails, AccordionSummary, Input, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { GameFilter, categoriesOptions } from './Types';
import { useState } from 'react';
import { CategoriesSelector } from './CategoriesSelector';

interface Props {
  filter: GameFilter;
  updateFilter: (search: GameFilter) => void;
}

export const Search = ({ filter, updateFilter }: Props ) => {
  const [expanded, setExpanded] = useState(true)


  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const options = event.target.options;
    const selectedValues: string[] = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }
    updateFilter({...filter, categories: selectedValues });
  };


  const categorySelector = (
    <div>
      <select multiple value={filter.categories} onChange={handleChange}>
        {categoriesOptions.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <p>Selected Categories: {filter.categories.join(', ')}</p>
    </div>
  );

  return (
    <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
      <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Search</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <label>Name:</label>
          <Input
            onChange={(e) => updateFilter({ ...filter, name: e.target.value })}
            value={filter.name}
          />

        </AccordionDetails>

        <AccordionDetails>
          <label htmlFor="minPlayers" style={{ }}>Min No. Players:</label>
          <input
            type="number"
            id="minPlayers"
            name="minPlayers"
            style={{
              padding: '5px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              width: '25px',
            }}
            value={filter.minPlayers}
            onChange={(e) => updateFilter({ ...filter, minPlayers: Number(e.target.value) })}
          />
          <button 
            onClick={() => updateFilter({ ...filter, minPlayers: (Number(filter.minPlayers) - 1) })} 
            style={{ marginLeft: '10px', padding: '5px 10px' }}>
            -
          </button>
          <button 
            onClick={() => updateFilter({ ...filter, minPlayers: (Number(filter.minPlayers) + 1) })} 
            style={{ marginLeft: '2px', padding: '5px 10px' }}>
              +
          </button>
        
        </AccordionDetails>

        <AccordionDetails>
          <label htmlFor="maxPlayers" style={{ }}>Max No. Players:</label>
          <input
            type="number"
            id="maxPlayers"
            name="maxPlayers"
            style={{
              padding: '5px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              width: '35px',
            }}
            value={filter.maxPlayers}
            onChange={(e) => updateFilter({ ...filter, maxPlayers: Number(e.target.value) })}
          />
          <button 
            onClick={() => updateFilter({ ...filter, maxPlayers: (Number(filter.maxPlayers) - 1) })} 
            style={{ marginLeft: '10px', padding: '5px 10px' }}>
            -
          </button>
          <button 
            onClick={() => updateFilter({ ...filter, maxPlayers: (Number(filter.maxPlayers) + 1) })} 
            style={{ marginLeft: '2px', padding: '5px 10px' }}>
              +
          </button>


        </AccordionDetails>
        <AccordionDetails sx={{padding: '8px 8px 16px'}} >
          <CategoriesSelector filter={filter} updateFilter={updateFilter}/>
        </AccordionDetails>
    </Accordion>
  )
}