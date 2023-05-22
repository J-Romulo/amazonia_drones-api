import { mocked_paths as paths } from "../../../util/mocks";
import { GetLastPathsService } from "./GetLastPathsService";

jest.mock('knex')

describe('GetLastPathsService', () => {
  test('should return the last 10 paths', async () => {
    const mockKnexInstance = {
      orderBy: jest.fn().mockReturnThis(),
      limit: jest.fn().mockReturnThis(),
      select: jest.fn().mockResolvedValue(paths), 
    };
    const mKnex = jest.fn().mockReturnValue(mockKnexInstance);

    (require('knex') as jest.Mock).mockReturnValue(mKnex);
    const service = new GetLastPathsService();

    const results = await service.execute();

    expect(results).toEqual(paths);
    expect(mockKnexInstance.limit).toBeCalledWith(10)
    expect(mockKnexInstance.orderBy).toBeCalledWith('created_at', 'desc')
  });
});
