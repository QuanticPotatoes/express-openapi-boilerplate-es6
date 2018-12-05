import express from 'express';
import { initialize } from 'express-openapi';
import v1ApiDoc from './api-v1/api-doc';

const app = express();
initialize({
    app,
    // NOTE: If using yaml it's necessary to use "fs" e.g.
    // apiDoc: fs.readFileSync(path.resolve(__dirname, './api-v1/api-doc.yml'), 'utf8'),
    apiDoc: v1ApiDoc,
    paths: './api-v1/paths'
});

app.listen(3000);
