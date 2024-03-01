import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onSubmit }) {

  const [form, setForm] = useState({
    name: "",
    hp: "",
    sprites: {
      front: "",
      back: ""
    }
  })

  // HANDLE SUBMIT
  function handleSubmit(e) {
    e.preventDefault()
    
    // CREATE NEW POKEMON
    const newPokemon = {
      name: form.name,
      hp: form.hp,
      sprites: {
        front: form.sprites.front,
        back: form.sprites.back
      }
    }
    // POST REQUEST
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPokemon)
    })
      .then(res => res.json())
      .then(newPokemon => onSubmit(newPokemon))
    // RESET FORM FIELD
    setForm({
      name: "",
      hp: "",
      sprites: {
        front: "",
        back: ""
      }
    })
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid label="Name" 
            placeholder="Name" 
            name="name" 
            value={form.name}
            onChange={e => setForm({
              ...form,
              name: e.target.value
            })}
          />
          <Form.Input 
            fluid label="hp" 
            placeholder="hp" 
            name="hp"
            value={form.hp}
            onChange={e => setForm({
              ...form,
              hp: e.target.value
            })} 
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={form.sprites.front}
            onChange={e => setForm({
              ...form,
              sprites: {
                ...form.sprites,
                front: e.target.value
              }
            })}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={form.sprites.back}
            onChange={e => setForm({
              ...form,
              sprites: {
                ...form.sprites,
                back: e.target.value
              }
            })}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
