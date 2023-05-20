import express from 'express';
import { errors } from 'celebrate';
import { routes } from './routes';
import 'dotenv/config';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

const app = express();
const PORT = 3000;
  
const swaggerDocs = YAML.load(`${__dirname}/documents/swagger.yaml`);

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(routes);
app.use(errors());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});