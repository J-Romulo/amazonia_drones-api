import { GetFastestRouteService } from './GetFastestRouteService';
import { getRoutes } from '../../../providers/MockedAPI';
import { mockedRoutes } from '../../../util/mocks';

jest.mock('../../../providers/MockedAPI');
jest.mock('knex');

describe('GetFastestRouteService', () => {
  test('should calculate and insert the fastest route', async () => {
    (getRoutes as jest.Mock).mockResolvedValue(mockedRoutes);

    const mockKnexInstance = {
      insert: jest.fn().mockResolvedValue(undefined),
    };

    const mKnex = jest.fn().mockReturnValue(mockKnexInstance);

    (require('knex') as jest.Mock).mockReturnValue(mKnex);

    const service = new GetFastestRouteService();

    const startingPoint = 'A1';
    const object = 'B1';
    const destination = 'A2';

    const result = await service.execute(startingPoint, object, destination);

    expect(getRoutes).toHaveBeenCalled();

    expect(mockKnexInstance.insert).toHaveBeenCalledWith({
      starting_point: startingPoint,
      object,
      destination,
      path: 'A1 - B1 - A1 - A2',
      total_time: 30,
    });

    expect(result).toEqual({
      path: ['A1', 'B1', 'A1', 'A2'],
      total_time: 30,
    });
  });
});