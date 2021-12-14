import { rest } from 'msw'

export const handlers = [
  rest.get(`${process.env.REACT_APP_API_SERVER}/products`, (req, res, ctx) => {
    const response = {
      results: [
        {'name': 'Blender', 'inventoryCount': 10, 'description': 'asdf', 'imageUrl': '', 'categoryId': '1'},
        {'name': 'Sofa', 'inventoryCount': 1, 'description': 'asdf', 'imageUrl': '', 'categoryId': '2'},
        {'name': 'Television', 'inventoryCount': 3, 'description': 'asdf', 'imageUrl': '', 'categoryId': '3'},
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
        {'name': 'Blender', 'inventoryCount': 10, 'description': 'asdf', 'imageUrl': '', 'categoryId': '1'},
        {'name': 'Sofa', 'inventoryCount': 1, 'description': 'asdf', 'imageUrl': '', 'categoryId': '2'},
        {'name': 'Television', 'inventoryCount': 5, 'description': 'asdf', 'imageUrl': '', 'categoryId': '3'},
        req.body
      ]
    };
  
    return res(
      ctx.status(201),
      ctx.json(response)
    );
  }),

  rest.put(`${process.env.REACT_APP_API_SERVER}/products`, (req, res, ctx) => {
    if(!req.body.amount) {
      return res(
        ctx.status(200),
        ctx.json({err: 'Something went wrong...'})
      );
    }

    if(req.body.action === 'increment') {
      ++req.body.inventoryCount;
    } 
    else if(req.body.action === 'decrement') {
      --req.body.inventoryCount;
    }
    console.log(req.body)
    return res(
      ctx.status(200),
      ctx.json({ inventoryCount: req.body.inventoryCount })
    );
  }),

  rest.get(`${process.env.REACT_APP_API_SERVER}/categories`, (req, res, ctx) => {
    const response = {
      results: [
        { 'id': 1, 'displayName': 'Appliances', 'description': '', 'normalizedName': 'appliances' },
        { 'id': 2, 'displayName': 'Furniture', 'description': '', 'normalizedName': 'appliances' },
        { 'id': 3, 'displayName': 'Electronics', 'description': '', 'normalizedName': 'appliances' }
      ]
    };
    return res(
      ctx.status(200),
      ctx.json(response)
    );
  }),
]