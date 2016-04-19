# ml-rdf-formats

Load RDF triples of various formats into MarkLogic.

## Requirements

- MarkLogic
- Node.js

## Running

1. Install dependencies:

   ```npm install```

2. Copy `config_sample.js` to `config.js` and then edit `config.js` for your environment (username, password, etc.).

3. Set up the database and REST API:

   ```node setup```

4. Load some triples. Reference the files located inside the `data` directory:

   ```node load triples.nq```

   Note: As of this writing, the MarkLogic REST API (and therefore this project) can only load triples in the N-Quads (.nq) and TriG (.trig) formats. So only the `triples.nq` and `triples.trig` files will load successfully.

5. Read the loaded triples:

   ```node read```

6. To undo the setup step and start over:

   ```node teardown```
