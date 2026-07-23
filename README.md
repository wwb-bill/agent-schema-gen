# agent-schema-gen

Cross-language tool schema generator. Pydantic + Zod from single definition.

```typescript
import { generate } from "agent-schema-gen";
const { typescript, python } = generate({ name:"search", description:"...", params:[...] });
```

MIT
