import { rest } from 'msw'

export const handlers = [
  rest.get(`${process.env.REACT_APP_API_SERVER}/products`, (req, res, ctx) => {
    const response = {
      results: [
        {'name': 'Blender', 'inventoryCount': 2, 'description': 'asdf', 'imageUrl': '', 'categoryId': 1},
        {'name': 'Sofa', 'inventoryCount': 1, 'description': 'asdf', 'imageUrl': '', 'categoryId': 2},
        {'name': 'Television', 'inventoryCount': 3, 'description': 'asdf', 'imageUrl': '', 'categoryId': 3},
      ]
    };
    return res(
      ctx.status(200),
      ctx.json(response)
    );
  }),

  rest.post(`${process.env.REACT_APP_API_SERVER}/products`, (req, res, ctx) => {
    const response = {
      results: [
        {'name': 'Blender', 'inventoryCount': 2, 'description': 'asdf', 'imageUrl': '', 'categoryId': 1},
        {'name': 'Sofa', 'inventoryCount': 1, 'description': 'asdf', 'imageUrl': '', 'categoryId': 2},
        {'name': 'Television', 'inventoryCount': 3, 'description': 'asdf', 'imageUrl': '', 'categoryId': 3},
        req.body
      ]
    };
  
    return res(
      ctx.status(201),
      ctx.json(response)
    );
  }),
  rest.get(`${process.env.REACT_APP_API_SERVER}/categories`, (req, res, ctx) => {
    const response = {
      results: [
        { 'displayName': 'Appliances', 'description': '', 'normalizedName': 'appliances' },
        { 'displayName': 'Furniture', 'description': '', 'normalizedName': 'appliances' },
        { 'displayName': 'Electronics', 'description': '', 'normalizedName': 'appliances' }
      ]
    };
    return res(
      ctx.status(200),
      ctx.json(response)
    );
  }),
]