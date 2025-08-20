# Flux Image Generator API

Generate images using Hugging Face’s models with Node.js.

## Features

- **Image Generation**: Via Hugging Face models.
- **Customizable**: Choose models.

## Setup

1. **Clone**:
    ```bash
    git clone https://github.com/forcodespace/Flux.git
    ```

2. **Install**:
    ```bash
    cd flux
    npm install
    ```

3. **Get API Key**:
   - Create an API token at [Hugging Face](https://huggingface.co/settings/tokens).
   - Update `index.js` with your API key.

## Usage

1. **Start Server**:
    ```bash
    node index.js
    ```

2. **Generate Image**:
   ```bash
   curl "http://localhost:3000/api/flux?gen=your_input&model=1/2"
   ```

## API

- **Endpoint**: `GET /api/flux`
- **Params**:
  - `gen`: Generation input.
  - `model`: Model number (`1` or `2`).

## Contribute

1. **Fork** and **branch**.
2. **Commit** and **push**.
3. **Create a PR**.

## License

[MIT License](LICENSE)

## Contact

- **Email**: [abcdocss@gmail.com](mailto:forcodespace@gmail.com)
- **Issues**: [GitHub Issues](https://github.com/forcodespace/Flux/issues)

Thank you for using Flux Image Generator API!
