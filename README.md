# Flux Image Generator API

Welcome to the **Flux Image Generator API**! This Node.js application allows you to generate high-quality images using Hugging Face's image generation models.

## Overview

Flux Image Generator API provides a simple interface to interact with Hugging Face's models for image generation. You can easily generate images by specifying parameters via HTTP requests.

## Features

- **Image Generation**: Generate images using Hugging Face models.
- **Customizable Models**: Select from multiple models to suit your needs.
- **Simple API**: Easy-to-use HTTP interface for generating images.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- An [Hugging Face account](https://huggingface.co/join) to obtain an API key

## Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/sarkardocs/flux.git
    ```

2. **Navigate to the Project Directory**:
    ```bash
    cd flux
    ```

3. **Install Dependencies**:
    ```bash
    npm install
    ```

4. **Obtain Hugging Face API Key**:

   - Sign up or log in to [Hugging Face](https://huggingface.co/).
   - Go to your [API tokens page](https://huggingface.co/settings/tokens).
   - Generate a new API token and copy it.

5. **Set Your API Key**:
   - Open the `index.js` file.
   - Replace the placeholder API key in the `HF_API_KEY` constant with your actual API key.

## Usage

1. **Start the Server**:
    ```bash
    node index.js
    ```

2. **Generate an Image**:
   - Make a GET request to the `/api/flux` endpoint with query parameters `gen` and `model`. For example:
     ```bash
     curl "http://localhost:3000/api/flux?gen=your_input_parameters&model=1/2"
     ```

   - Replace `your_input_parameters` with the text or parameters you want to use for image generation, and `model` with `1` or `2` depending on which model you want to use.

## API Endpoints

### `GET /api/flux`

- **Query Parameters**:
  - `gen`: Input parameters for image generation.
  - `model`: Model selection (`1` or `2`).

- **Responses**:
  - **200 OK**: The generated image.
  - **400 Bad Request**: Missing or invalid query parameters.
  - **500 Internal Server Error**: Error querying the Hugging Face API.

## Example

To generate an image using model `1`:

```bash
curl "http://localhost:3000/api/flux?gen=example_image_parameters&model=1" --output generated_image.png
```

## Contributing

We welcome contributions! To contribute:

1. **Fork the Repository**.
2. **Create a New Branch** (`git checkout -b feature-branch`).
3. **Make Changes and Commit** (`git commit -am 'Add new feature'`).
4. **Push to the Branch** (`git push origin feature-branch`).
5. **Create a Pull Request**.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For questions or feedback, please reach out to:

- **Email**: [sarkardocss@gmail.com](mailto:sardocss@gmail.com)
- **GitHub Issues**: [Create an Issue](https://github.com/sarkardocs/flux/issues)

Thank you for using the Flux Image Generator API!
