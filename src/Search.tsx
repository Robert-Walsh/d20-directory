import { AccordionDetails, AccordionSummary, Checkbox, Input, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { GameFilter, categoriesOptions } from './Types';
import { useState } from 'react';
import { CategoriesSelector } from './CategoriesSelector';
import { GiTabletopPlayers } from "react-icons/gi";

interface Props {
  filter: GameFilter;
  updateFilter: (search: GameFilter) => void;
}

export const Search = ({ filter, updateFilter }: Props ) => {
  const [expanded, setExpanded] = useState(false)


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

  return (
    <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)} sx={{margin: '10px 8px', borderRadius: '5px'}}>
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
          <>
            <label htmlFor="players" style={{ }}>Players:</label>
            <input
              type="number"
              id="players"
              name="players"
              style={{
                padding: '5px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                width: '50px',
                height: '25px'
              }}
              value={filter.players}
              onChange={(e) => updateFilter({ ...filter, players: Number(e.target.value) })}
              disabled={!filter.showPlayers}
            />
            <></>
            <Checkbox 
                  onChange={() => updateFilter({ ...filter, showPlayers: !filter.showPlayers })} 
                  checked={filter.showPlayers}
              />
          </>

          
        </AccordionDetails>

        <AccordionDetails sx={{padding: '8px 8px 16px'}} >
          <CategoriesSelector filter={filter} updateFilter={updateFilter}/>
        </AccordionDetails>
    </Accordion>
  )
}