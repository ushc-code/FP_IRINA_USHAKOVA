const instancesMap: Map<string, any> = new Map();

function Injectable(key: string) {
  return function (target: any) {
    const instance = new target();
    instancesMap.set(key, instance);
  };
}

function Inject(key: string) {
  return function (target: any, propertyKey: string) {
    const instance = instancesMap.get(key);
    if (instance) {
      target[propertyKey] = instance;
    } else {
      throw new Error(`Instance with key ${key} not found`);
    }
  };
}

// Пример использования декораторов
@Injectable("exampleInstance")
class FirstClass {
  // ...
}

class SecondClass {
  @Inject("exampleInstance")
  public exampleInstance: FirstClass;
}

const secondClass = new SecondClass();
console.log(secondClass);
