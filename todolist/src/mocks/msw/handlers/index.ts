import { tagsHandler } from './tags';
import { tasksHandler } from './tasks';

export const handlers = [...tagsHandler, ...tasksHandler];
