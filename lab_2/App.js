import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

// Типы переменных согласно заданию:
// int    — целые числа (operandA, operandB после parseInt)
// float  — дробные числа (operandA, operandB после parseFloat)
// string — строка выражения (expression) и текущий ввод (display)

export default function App() {
  const [display, setDisplay] = useState('0');      // string
  const [expression, setExpression] = useState(''); // string
  const [prevValue, setPrevValue] = useState(null); // string | null
  const [operator, setOperator] = useState(null);   // string | null
  const [freshInput, setFreshInput] = useState(false);
  const [typeInfo, setTypeInfo] = useState('');     // string

  // --- вспомогательные ---

  const isInt = (n) => Number.isInteger(parseFloat(n));

  const getTypeInfo = (a, b, result) => {
    const aType = Number.isInteger(a) ? 'int' : 'float';
    const bType = Number.isInteger(b) ? 'int' : 'float';
    const rType = Number.isInteger(result) ? 'int' : 'float';
    return `a:${aType}  b:${bType}  →  result:${rType}  expr:string`;
  };

  const formatResult = (num) => {
    if (!isFinite(num)) return 'Ошибка';
    const fixed = parseFloat(num.toFixed(10));
    return String(fixed);
  };

  // --- обработчики нажатий ---

  const handleNumber = (n) => {
    if (freshInput) {
      setDisplay(n);
      setFreshInput(false);
    } else {
      setDisplay(display === '0' ? n : display + n);
    }
  };

  const handleDot = () => {
    if (freshInput) {
      setDisplay('0.');
      setFreshInput(false);
      return;
    }
    if (!display.includes('.')) setDisplay(display + '.');
  };

  const handleOperator = (op) => {
    const symbols = { '+': '+', '-': '−', '*': '×', '/': '÷' };
    setPrevValue(display);
    setOperator(op);
    setExpression(`${display} ${symbols[op]}`);
    setFreshInput(true);
    setTypeInfo('');
  };

  const handleEquals = () => {
    if (!operator || prevValue === null) return;

    // int / float — зависит от введённых значений
    const a = isInt(prevValue) ? parseInt(prevValue, 10) : parseFloat(prevValue);
    const b = isInt(display)   ? parseInt(display, 10)   : parseFloat(display);

    const symbols = { '+': '+', '-': '−', '*': '×', '/': '÷' };

    // string — строка выражения для отображения
    const exprString = `${prevValue} ${symbols[operator]} ${display} =`;

    let result;
    if (operator === '+') result = a + b;
    else if (operator === '-') result = a - b;
    else if (operator === '*') result = a * b;
    else result = b === 0 ? Infinity : a / b;

    const resultStr = formatResult(result); // string

    setDisplay(resultStr);
    setExpression(exprString);
    setPrevValue(null);
    setOperator(null);
    setFreshInput(true);
    setTypeInfo(isFinite(result) ? getTypeInfo(a, b, result) : '');
  };

  const handleClear = () => {
    setDisplay('0');
    setExpression('');
    setPrevValue(null);
    setOperator(null);
    setFreshInput(false);
    setTypeInfo('');
  };

  const handleToggleSign = () => {
    if (display !== '0')
      setDisplay(display.startsWith('-') ? display.slice(1) : '-' + display);
  };

  const handlePercent = () => {
    setDisplay(String(parseFloat(display) / 100));
  };

  // --- рендер ---

  const Button = ({ label, onPress, variant = 'num' }) => (
    <TouchableOpacity
      style={[styles.btn, styles[`btn_${variant}`]]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.btnText, variant === 'zero' && styles.btnTextLeft]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.expression} numberOfLines={1}>{expression}</Text>
        <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
          {display}
        </Text>
        {typeInfo ? (
          <Text style={styles.typeInfo}>{typeInfo}</Text>
        ) : null}
      </View>

      <View style={styles.row}>
        <Button label="AC"  onPress={handleClear}       variant="func" />
        <Button label="+/-" onPress={handleToggleSign}  variant="func" />
        <Button label="%"   onPress={handlePercent}     variant="func" />
        <Button label="÷"   onPress={() => handleOperator('/')} variant="op" />
      </View>
      <View style={styles.row}>
        <Button label="7" onPress={() => handleNumber('7')} />
        <Button label="8" onPress={() => handleNumber('8')} />
        <Button label="9" onPress={() => handleNumber('9')} />
        <Button label="×" onPress={() => handleOperator('*')} variant="op" />
      </View>
      <View style={styles.row}>
        <Button label="4" onPress={() => handleNumber('4')} />
        <Button label="5" onPress={() => handleNumber('5')} />
        <Button label="6" onPress={() => handleNumber('6')} />
        <Button label="−" onPress={() => handleOperator('-')} variant="op" />
      </View>
      <View style={styles.row}>
        <Button label="1" onPress={() => handleNumber('1')} />
        <Button label="2" onPress={() => handleNumber('2')} />
        <Button label="3" onPress={() => handleNumber('3')} />
        <Button label="+" onPress={() => handleOperator('+')} variant="op" />
      </View>
      <View style={styles.row}>
        <Button label="0" onPress={() => handleNumber('0')} variant="zero" />
        <Button label="." onPress={handleDot} />
        <Button label="=" onPress={handleEquals} variant="op" />
      </View>
    </SafeAreaView>
  );
}

const BTN = 76;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  display: {
    paddingHorizontal: 8,
    paddingBottom: 16,
    alignItems: 'flex-end',
  },
  expression: {
    fontSize: 32,
    color: '#8e8e93',
    marginBottom: 4,
  },
  result: {
    fontSize: 68,
    fontWeight: '300',
    color: '#fff',
    letterSpacing: -2,
  },
  typeInfo: {
    fontSize: 32,
    color: '#636366',
    marginTop: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  btn: {
    width: BTN,
    height: BTN,
    borderRadius: BTN / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_num:  { backgroundColor: '#3a3a3c' },
  btn_func: { backgroundColor: '#636366' },
  btn_op:   { backgroundColor: '#ff9f0a' },
  btn_zero: {
    width: BTN * 2 + 12,
    borderRadius: BTN / 2,
    backgroundColor: '#3a3a3c',
    paddingLeft: 28,
    alignItems: 'flex-start',
  },
  btnText: {
    fontSize: 28,
    fontWeight: '400',
    color: '#fff',
  },
  btnTextLeft: {
    fontSize: 28,
    fontWeight: '400',
    color: '#fff',
  },
});