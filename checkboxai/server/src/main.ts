import 'dotenv/config';
import { app } from './app.js';

const PORT = process.env.PORT || 4242;

app.listen(PORT, () => {
  console.info('Server is running on port ' + PORT);
});
