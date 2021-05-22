class Model {
  constructor () {
    this.info = {
      title: '改革开放',
      type: 'type',
      content: '改革开放是中国共产党在社会主义初级阶段基本路线的两个基本点之一。改革，即对内改革，就是在坚持社会主义制度的前提下，自觉地调整和改革生产关系同生产力、上层建筑同经济基础之间不相适应的方面和环节，促进生产力的发展和各项事业的全面进步，更好地实现广大人民群众的根本利益。'
    }

    this.listeners = [];
  }

  getInfo () {
    return this.info;
  }

  setInfo (info) {
    this.info = {
      ...this.info,
      ...info
    }

    this.listeners.forEach(l => l(this.info));
  }

  subscribe (fn) {
    if (typeof fn !== 'function') return;

    this.listeners.push(fn);
  }

  unsubscribe (fn) {
    this.listeners = this.listeners.filter(l => l !== fn);
    console.log(this.listeners)
  }
}

export default new Model();
