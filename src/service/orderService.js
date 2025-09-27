import db from "../config/prisma.js";

class OrderService {
  async getAll() {
    return await db.order.findMany();
  }

  async getById(id) {
    return await db.order.findUnique({
      where: { id: parseInt(id) },
    });
  }

  async create(orderData) {
    return await db.order.create({ data: orderData });
  }

  async update(id, orderData) {
    return await db.order.update({
      where: { id: parseInt(id) },
      data: orderData,
    });
  }

  async delete(id) {
    return await db.order.delete({
      where: { id: parseInt(id) },
    });
  }
}

export default OrderService;
