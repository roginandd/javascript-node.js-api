import OrderService from "../service/orderService.js";

class OrderController {
  constructor() {
    this.orderService = new OrderService();

    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async getAll(req, res) {
    try {
      const orders = await this.orderService.getAll();

      res.json(orders);
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch orders" });
    }
  }

  async getById(req, res) {
    try {
      const orderId = req.params.id;
      const order = await this.orderService.getById(orderId);

      if (order) res.json(order);
      else res.status(404).json({ message: "Order not found" });
    } catch (err) {
      res.status(500).json({ message: "Error retreiving order" });
    }
  }

  async create(req, res) {
    try {
      const data = req.body;
      const newOrder = await this.orderService.create(data);

      res.status(201).json(newOrder);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Failed to create order" });
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      const orderData = req.body;

      const updated = await this.orderService.update(id, orderData);

      res.json(updated);
    } catch (err) {
      res.status(404).json({ message: "Order not found" });
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;

      await this.orderService.delete(id);

      res.json({ message: "Order Deleted" });
    } catch (err) {
      res.status(404).json({ message: "Order not found" });
    }
  }
}

export default OrderController;
