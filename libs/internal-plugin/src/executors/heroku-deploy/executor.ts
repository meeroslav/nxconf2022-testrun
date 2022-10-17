import { HerokuDeployExecutorSchema } from './schema';
import { execSync } from 'child_process';

export default async function runExecutor(options: HerokuDeployExecutorSchema) {
  const cwd = options.distLocation;
  execSync(`heroku container:login`, { cwd });
  execSync(`heroku container:push web --app ${options.herokuAppName}`, { cwd });
  execSync(`heroku container:release web --app ${options.herokuAppName}`, {
    cwd,
  });
  return {
    success: true,
  };
}
