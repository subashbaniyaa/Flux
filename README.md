**Flux Text To Image API**

Generate images using Hugging Face’s models with Node.js.

**Clone**:
    ```bash
    git clone https://github.com/forcodespace/Flux.git
    ```
    <br>
**Install**
    ```bash
    cd flux
    npm install
    ```
    <br>
    <br>
**Get API Key**:
   - Create an API token at [Hugging Face](https://huggingface.co/settings/tokens).
   - Update `index.js` with your API key.

**Start Server**:
    ```bash
    node index.js
    ```
    
**Generate Image**:
   ```bash
   curl "http://localhost:3000/api/flux?gen=your_input&model=1/2"
   ```

- **Endpoint**: `GET /api/flux`
- **Params**:
  - `gen`: Generation input.
  - `model`: Model number (`1` or `2`).
