const QUESTIONS = {
  "choice": [
    {
      "type": "choice",
      "question": "在数据挖掘工作中，将原始数据变成便于进行数据分析或挖掘的数据的过程被称为什 么？( )",
      "answer": "C",
      "options": [
        "数据变换",
        "数据预处理",
        "数据合并",
        "数据清洗"
      ]
    },
    {
      "type": "choice",
      "question": "如下选项实现对“脏”数据进行的检查与纠正，目的包括补充缺失的值，解决数据的重复 不一致性等的是（ ）。",
      "answer": "A",
      "options": [
        "数据变换",
        "数据规约",
        "数据合并",
        "数据清洗"
      ]
    },
    {
      "type": "choice",
      "question": "下列选项中，负责将多个数据源合并成一个数据源的是( ）。",
      "answer": "D",
      "options": [
        "数据集成",
        "数据规约",
        "数据变换",
        "数据清理"
      ]
    },
    {
      "type": "choice",
      "question": "下列选项中，哪个是同一数据多次出现的问题？( ）",
      "answer": "B",
      "options": [
        "数据冗余",
        "数据异常",
        "数据重复",
        "数据缺失"
      ]
    },
    {
      "type": "choice",
      "question": "下列选项中，支持高维度数组与矩阵运算的是( ）。",
      "answer": "A",
      "options": [
        "NumPy",
        "pandas",
        "SciPy",
        "scikit-learn"
      ]
    },
    {
      "type": "choice",
      "question": "关于数据预处理的说法，下列描述错误的是（ ）",
      "answer": "C",
      "options": [
        "数据预处理是数据分析或数据挖掘前的准备工作",
        "数据预处理只负责处理“脏”数据",
        "数据预处理的工作量占整个数据挖掘工作的 60%",
        "初始数据直接被使用可能会导致数据分析结果出现偏差"
      ]
    },
    {
      "type": "choice",
      "question": "数据质量的（ ）要求确保数据必须反映真实的业务内容。",
      "answer": "A",
      "options": [
        "一致性",
        "准确性",
        "规范性",
        "正确性"
      ]
    },
    {
      "type": "choice",
      "question": "下列选项中，可创建一个 2 行 3 列数组的是( )",
      "answer": "B",
      "options": [
        "np.ones((3，3))",
        "arr = np.array([1， 2]，[4，5])",
        "arr = np.array([1， 2， 3]，[4，5，6])",
        "arr = np.array([1， 2， 3])"
      ]
    },
    {
      "type": "choice",
      "question": "在 NumPy 中，哪个函数用于创建一个新的多维数组？( )",
      "answer": "A",
      "options": [
        "numpy.vector()",
        "numpy.list()",
        "numpy.matrix()",
        "numpy.array()"
      ]
    },
    {
      "type": "choice",
      "question": "如何获取 NumPy 数组的维度？( )",
      "answer": "C",
      "options": [
        "numpy.zeros((3,3))",
        "numpy.eye(3)",
        "numpy.ones((3,3))",
        "numpy.identity(3,3)",
        "array.len",
        "array.shape",
        "array.ndim",
        "array.size"
      ]
    },
    {
      "type": "choice",
      "question": "关于 Series 对象的操作，下列说法正确的是( )。",
      "answer": "A",
      "options": [
        "Series 对象使用下标进行切片索引时，包含下标索引结束的元素",
        "Series 对象的下标是从 l 开始的",
        "Series 对象只能按值排序，不支持通过标签来排序",
        "Series 对象可以通过标签来增加、删除和修改单个值"
      ]
    },
    {
      "type": "choice",
      "question": "如何在 Series 对象中筛选出大于某个特定值的元素？( )",
      "answer": "B",
      "options": [
        "Series.where(Series > value)",
        "Series.select(value)",
        "Series[Series > value]",
        "Series.filter(value)"
      ]
    },
    {
      "type": "choice",
      "question": "Series 对象中，哪个方法可以用来添加一个新的元素？( )",
      "answer": "D",
      "options": [
        "Series.loc[] = value",
        "Series.merge()",
        "Series.concat()",
        "Series.add()"
      ]
    },
    {
      "type": "choice",
      "question": "Series 对象中，哪个方法可以用来删除指定索引的元素？( )",
      "answer": "B",
      "options": [
        "Series.bool()",
        "Series.to_bool()",
        "Series.astype('bool')",
        "Series.to_numeric()",
        "Series.delete()",
        "Series.remove()",
        "Series.del ()",
        "Series.drop()"
      ]
    },
    {
      "type": "choice",
      "question": "、如何在 Series 对象中筛选出大于某个特定值的元素？( )",
      "answer": "B",
      "options": [
        "Series.where(Series > value)",
        "Series[value]",
        "Series[Series > value]",
        "Series.filter(value)"
      ]
    },
    {
      "type": "choice",
      "question": "关于 DataFrame 对象的操作，下列说法不正确的是（ ）。",
      "answer": "C",
      "options": [
        "DataFrame 对象按值排序使用 sort_values()方法，按标签排序使用 sort_index()方法",
        "在 DataFrame 对象的删除和修改操作中，如果直接对原数据进行操作，需要指定参数",
        "在 DataFrame 对象的删除和修改操作中，参数 axis=0 表示对行操作，axis=1 表示对列",
        "在 DataFrame 对象 df 中添加一行数据可以使用 df1oc[]方法，添加一列数据可以使用"
      ]
    },
    {
      "type": "choice",
      "question": "下表数据保存在 DataFrame 对象 df 中，要获取有背景色部分的数据，正确的语句是 ( )。",
      "answer": "B",
      "options": [
        "df.iloc[1:3，[0，1]]",
        "df.loc[1:4，['book'，'author']]",
        "df.loc[2:3，['book'，'author']]",
        "df.iloc[2:3，['book'，'author']]"
      ]
    },
    {
      "type": "choice",
      "question": "、如何选择 DataFrame 中的第一行数据？( )",
      "answer": "B",
      "options": [
        "df.tail(1)",
        "df.head(1)",
        "df.iloc[0]",
        "df[0]"
      ]
    },
    {
      "type": "choice",
      "question": "、如何选取 DataFrame 中第 3 行到最后一行的数据？( )",
      "answer": "A",
      "options": [
        "df.tail(2)",
        "df[2:]",
        "df.loc[2:]",
        "df.iloc[2:]"
      ]
    },
    {
      "type": "choice",
      "question": "使用( )方法提交表单数据，会带来安全问题，比如一个登录页面，通过这种方式提数 据时，用户名和密码将出现在 URL 上。",
      "answer": "A",
      "options": [
        "TRACE",
        "HEAD",
        "POST",
        "GET"
      ]
    },
    {
      "type": "choice",
      "question": "关于各种网络爬虫，以下说法不正确的是( )。",
      "answer": "D",
      "options": [
        "增量式网络爬虫在需要的时候爬行新产生或发生变化的页面，并重新下载所有页面",
        "聚焦网络爬虫根据一定的页面分析算法过滤与主题无关的链接，保留有用的链接并将其",
        "通用网络爬虫适用于为搜索引擎搜索广泛的主题，有较强的应用价值",
        "通用网络爬虫通常采用并行工作方式，但需要较长时间才能刷新一次页面"
      ]
    },
    {
      "type": "choice",
      "question": "关于表层页面及深层页面，以下说法不正确的是( )。",
      "answer": "C",
      "options": [
        "深层网络爬虫主要用于爬取隐藏在搜索表单后的深层页面",
        "深层页面中包含的信息远远少于表层页面",
        "深层页面是那些大部分内容不能通过静态链接获取的、隐藏在搜索表单后的，只有用户",
        "表层页面是指传统搜索引擎可以索引的页面，以超链接可以到达的静态页面为主构成的"
      ]
    },
    {
      "type": "choice",
      "question": "使用 Pandas 将 DataFrame 写入 CSV 文件时，应该使用哪个函数？( )",
      "answer": "B",
      "options": [
        "pd.to_sql()",
        "pd.to_json()",
        "pd.to_csv()",
        "pd.to_excel()"
      ]
    },
    {
      "type": "choice",
      "question": "在读取 CSV 文件时，如果想要指定分隔符为逗号，应该使用哪个参数？( )",
      "answer": "C",
      "options": [
        "delimiter=';'",
        "sep='，'",
        "step='，'",
        "delimiter"
      ]
    },
    {
      "type": "choice",
      "question": "在读取 CSV 文件时，如果想要将第一列作为 DataFrame 的索引，应该使用哪个参数？ ( )",
      "answer": "A",
      "options": [
        "usecols=[0]",
        "first_col_as_index=True",
        "index_col='first'",
        "index_col=0"
      ]
    },
    {
      "type": "choice",
      "question": "在写入 CSV 文件时，如果想要设置列的顺序，应该如何操作？( )",
      "answer": "A",
      "options": [
        "df.to_csv('file.csv', arrange=['col1', 'col2', 'col3'])",
        "df.to_csv('file.csv', sort=['col1', 'col2', 'col3'])",
        "df.to_csv('file.csv', order=['col1', 'col2', 'col3'])",
        "df.to_csv('file.csv', columns=['col1', 'col2', 'col3'])"
      ]
    },
    {
      "type": "choice",
      "question": "在读取 Excel 文件时，如果想要指定使用哪个列作为 DataFrame 的索引，应该使用哪个 参数？( )",
      "answer": "A",
      "options": [
        "footer",
        "header",
        "columns",
        "index_col"
      ]
    },
    {
      "type": "choice",
      "question": "在读取 Excel 文件时，如果想要跳过前几行，应该使用哪个参数？( )",
      "answer": "C",
      "options": [
        "nrows",
        "skiprows=n",
        "skipfooter",
        "skiprows=False"
      ]
    },
    {
      "type": "choice",
      "question": "在写入 Excel 文件时，如果不想在 Excel 中包含索引，应该使用哪个参数？( )",
      "answer": "B",
      "options": [
        "footer=False",
        "header=False",
        "index=False",
        "index=True"
      ]
    },
    {
      "type": "choice",
      "question": "读取 my.xlsx 文件中的“sheet1”的内容，并指定第一行为列明，使用如下哪个选项能完 成（ ）。",
      "answer": "A",
      "options": [
        "orient='table'",
        "orient='split'",
        "orient='records'",
        "orient='index'",
        "pandas.read_excel (“my.xlsx”，sheet_name=“sheet1”，head=[0])",
        "pandas.read_excel (“my.xlsx”，head=[1])",
        "pandas.read_excel (“my.xlsx”，head=[0])",
        "pandas.read_excel (“my.xlsx”，sheet_name=“sheet1”，head=[1])"
      ]
    },
    {
      "type": "choice",
      "question": "下面关于交叉堆叠合并的说法正确的是( )。",
      "answer": "D",
      "options": [
        "以上的说法都正确",
        "合并后，缺失的数据仍然用 NaN 填充",
        "如果 join='inner'，合并后得到两表的交集；如果 join='outer'，合并后得到两表的并集",
        "交叉堆叠合并操作是在 concat()方法中设置 join 参数实现的"
      ]
    },
    {
      "type": "choice",
      "question": "堆叠合并操作可以通过 pandas 的( )方法完成。",
      "answer": "B",
      "options": [
        "insert()",
        "drop()",
        "concat()",
        "append( )"
      ]
    },
    {
      "type": "choice",
      "question": "如下选项能实现在合并 DataFrame 时忽略索引的是？（ ）",
      "answer": "A",
      "options": [
        "reset_index=False",
        "reset_index=True",
        "ignore_index=False",
        "ignore_index=True"
      ]
    },
    {
      "type": "choice",
      "question": "如果想要水平合并两个 DataFrame，应该使用哪个参数？（ ）",
      "answer": "B",
      "options": [
        "orient='horizontal'",
        "axis=2",
        "axis=1",
        "axis=0"
      ]
    },
    {
      "type": "choice",
      "question": "如下选项能实现垂直堆叠两个 DataFrame 的是？（ ）",
      "answer": "C",
      "options": [
        "pd.merge([df1， df2]， axis=0)",
        "pd.concat([df1， df2]， axis=0)",
        "pd.concat([df1， df2]， axis=1)",
        "pd.concat([df1， df2])"
      ]
    },
    {
      "type": "choice",
      "question": "如下选项能实现在两个 DataFrame 上执行内连接合并的是？( )",
      "answer": "A",
      "options": [
        "pd.merge(df1， df2， how='right')",
        "pd.merge(df1， df2， how='left')",
        "pd.merge(df1， df2， how='outer')",
        "pd.merge(df1， df2， how='inner')"
      ]
    },
    {
      "type": "choice",
      "question": "如下选项能实现在主键合并 DataFrame 时指定连接的列的是？( )",
      "answer": "A",
      "options": [
        "right_on='column_name'",
        "left_on='column_name'",
        "using='column_name'",
        "on='column_name'"
      ]
    },
    {
      "type": "choice",
      "question": "如何在 combine_first 操作中保留第一个 DataFrame 的索引？( )",
      "answer": "B",
      "options": [
        "df1.add(df2)",
        "df1.update(df2)",
        "df1.combine_first(df2)",
        "df1.combine_first(df2， fill_value=0)"
      ]
    },
    {
      "type": "choice",
      "question": "重叠合并数据的功能通过 pandas 中提供的( )方法完成。",
      "answer": "C",
      "options": [
        "merge()",
        "combine_first ()",
        "concat()",
        "insert()"
      ]
    },
    {
      "type": "choice",
      "question": "DataFrame 对象调用哪个方法来查看缺失值？( )",
      "answer": "C",
      "options": [
        "drop()",
        "isnull()",
        "insert()",
        "sum()"
      ]
    },
    {
      "type": "choice",
      "question": "DataFrame 对象调用哪个方法来填充缺失值？( )",
      "answer": "B",
      "options": [
        "dropna()",
        "isnull()",
        "fillna()",
        "notnull()"
      ]
    },
    {
      "type": "choice",
      "question": "使用 Pandas 删除含有缺失值的行，应该使用哪个方法？( )",
      "answer": "A",
      "options": [
        "df.drop()",
        "df.replace()",
        "df.fillna()",
        "df.dropna()"
      ]
    },
    {
      "type": "choice",
      "question": "如果想要删除含有缺失值的列，应该如何操作？( ）",
      "answer": "C",
      "options": [
        "df.dropna(how='all')",
        "df.dropna(axis=1)",
        "df.dropna(axis=1， how='all')",
        "df.dropna(axis=0)"
      ]
    },
    {
      "type": "choice",
      "question": "进行缺失值处理，当一行所有值都缺失时才被删除，如下选项能实现的是：（ ）。",
      "answer": "B",
      "options": [
        "df.dropna(thresh=3)",
        "df.dropna(how=’any’)",
        "df.dropna(how=’all’)",
        "df.dropna(axis=1)"
      ]
    },
    {
      "type": "choice",
      "question": "在使用 duplicated 方法时，如何指定检查重复的列？( )",
      "answer": "B",
      "options": [
        "df.duplicated(axis=1)",
        "df.duplicated(['A'， 'B'])",
        "df.duplicated(subset=['A'， 'B'])",
        "df.duplicated(columns=['A'， 'B'])"
      ]
    },
    {
      "type": "choice",
      "question": "使用 drop_duplicates 方法删除重复行时，如果想要保留第一次出现的行，应该使用哪 个参数？( )",
      "answer": "D",
      "options": [
        "keep='first'",
        "keep='all'",
        "keep=False",
        "keep='last'"
      ]
    },
    {
      "type": "choice",
      "question": "如下不是异常值检测常见方法的是：（ ）。",
      "answer": "D",
      "options": [
        "空缺值检测法",
        "箱线图法",
        "标准差法",
        "最大最小值法"
      ]
    },
    {
      "type": "choice",
      "question": "如何在 DataFrame 对象中使用箱线图法检测异常值？( )",
      "answer": "A",
      "options": [
        "DataFrame.zscore()",
        "DataFrame.mad()",
        "DataFrame.iqr(）",
        "DataFrame.boxplot()"
      ]
    },
    {
      "type": "choice",
      "question": "如何在 DataFrame 对象中使用均值和标准差来定义异常值的范围？( )",
      "answer": "C",
      "options": [
        "DataFrame.quantile(0.05) 和 DataFrame.quantile(0.95)",
        "DataFrame.mean() ± DataFrame.std()",
        "DataFrame.median() 和 DataFrame.mad()",
        "DataFrame.mean() 和 DataFrame.var()"
      ]
    },
    {
      "type": "choice",
      "question": "Series 对象中，哪个方法可以用来计算数据的均值和标准差？( )",
      "answer": "D",
      "options": [
        "Series.mean() 和 Series.std()",
        "Series.quantile()",
        "Series.median() 和 Series.mad()",
        "Series.mean() 和 Series.var()"
      ]
    },
    {
      "type": "choice",
      "question": "下面哪个方法可以将 DataFrame 对象的数据进行强制类型变换？( )",
      "answer": "A",
      "options": [
        "drop()",
        "dtypes()",
        "dtype()",
        "astype()"
      ]
    },
    {
      "type": "choice",
      "question": "使用 Pandas 将 DataFrame 的 column 列转换为布尔型，应该使用哪个方法？( )",
      "answer": "A",
      "options": [
        "df['column'].round()",
        "df['column']. astype(boolean)",
        "df['column'].to_numeric()",
        "df['column'].astype(bool)"
      ]
    },
    {
      "type": "choice",
      "question": "如何将 DataFrame 的 column 列从整数类型转换为浮点类型？( )",
      "answer": "B",
      "options": [
        "df['column'].apply(lambda x: double(x))",
        "df['column'].to_numeric()",
        "df['column'].astype('float')",
        "df['column'].astype('int')"
      ]
    },
    {
      "type": "choice",
      "question": "将 DataFrame 对象 df 的身高'列保留 2 位小数的语句是（ ）。",
      "answer": "B",
      "options": [
        "df['身高'].round('2')",
        "df[‘身高’].round(0:2)",
        "df['身高'].round(2)",
        "df['身高’].format(‘.2’)"
      ]
    },
    {
      "type": "choice",
      "question": "如何将 DataFrame 的列从字符串类型转换为日期类型？( )",
      "answer": "D",
      "options": [
        "df['column'].apply(lambda x: pd.to_datetime(x))",
        "df['column'].to_numeric()",
        "df['column'].astype('datetime')",
        "df['column'].astype('str')"
      ]
    },
    {
      "type": "choice",
      "question": "用 replace()方法将 DataFrame 对象 df 中性别列的男替换为 1，女替换为 0 的语句是 （ ）。",
      "answer": "C",
      "options": [
        "df[‘性别].replace([‘男’:1，'女':0]，inplace=True)",
        "df[‘性别’].replace({'男’:1，'女':0}， inplace=True)",
        "df[‘性别’].replace(‘男’，1，'女',0，inplace=True)",
        "df[‘性别’].replace(‘男’，1，'女'，0)"
      ]
    },
    {
      "type": "choice",
      "question": "下面哪条语句可以将'拼音'列的字符串首字母变为大写字母？（）",
      "answer": "A",
      "options": [
        "df['拼音']=df['拼音'].map(str.strip)",
        "df'[拼音']=df['拼音'].map(str.min)",
        "df['拼音']=df['拼音'].map(str.max)",
        "df['拼音']=df['拼音'].map(str.title)"
      ]
    },
    {
      "type": "choice",
      "question": "将 DataFrame 对象 df 的'百分比'列设置为百分比，并且保留 2 位小数的语句是( ) 。",
      "answer": "D",
      "options": [
        "df[‘百分比’].map(lambda x:format(x，'.2%'))",
        "df[‘百分比’].map(format(.2%))",
        "df['百分比’].map(format(.2%))",
        "df['百分比’].format(‘.2%’)"
      ]
    },
    {
      "type": "choice",
      "question": "如何将 DataFrame 中所有大于 0 的值替换为 1，小于 0 的值替换为-1？( )",
      "answer": "B",
      "options": [
        "df.apply(lambda x: 1 if x > 0 else -1)",
        "df.map({x: 1 for x in df[df > 0])",
        "df.applymap(lambda x: 1 if x > 0 else -1)",
        "df.replace({1: 'positive', -1: 'negative'})"
      ]
    },
    {
      "type": "choice",
      "question": "如果有一个 DataFrame df，其中包含一个名为'age'的列，如何将这个列中的所有整数 年龄转换为字符串，并在每个值后面添加' years old'？( )",
      "answer": "A",
      "options": [
        "df['age'] = df['age'].map('%d years old')",
        "df['age'] = df['age'].format('%d years old')",
        "df['age'] = df['age']. format (lambda x: '{} years old')",
        "df['age'] = df['age'].map(lambda x: '{} years old'.format(x))"
      ]
    },
    {
      "type": "choice",
      "question": "如何将 DataFrame 中的浮点数四舍五入到最接近的整数，并转换为字符串？( )",
      "answer": "D",
      "options": [
        "df['float_column'] = df['float_column'].map(lambda x: '{:.0f}'.format(round(x)))",
        "df['float_column'] = df['float_column'].format('{:.0f}')",
        "df['float_column'] = df['float_column'].apply(lambda x: round(x))",
        "df['float_column'] = df['float_column'].map(lambda x: round(x))"
      ]
    },
    {
      "type": "choice",
      "question": "使用 Pandas 对 DataFrame 按照 column 列分组后计算每组的描述性统计量，应该使用 哪个方法？( )",
      "answer": "A",
      "options": [
        "df.groupby('column').agg('describe')",
        "df.describe().groupby('column')",
        "df.groupby('column').agg(describe)",
        "df.groupby('column').describe()"
      ]
    },
    {
      "type": "choice",
      "question": "可以通过 DataFrame 对象的哪个方法统计行/列数据的中位数？( )",
      "answer": "A",
      "options": [
        "mode()",
        "quantile()",
        "mean()",
        "median()"
      ]
    },
    {
      "type": "choice",
      "question": "如何计算 DataFrame 中某列的中位数值？( ）",
      "answer": "B",
      "options": [
        "df['column'].std()",
        "df['column'].mode()",
        "df['column'].median()",
        "df['column'].mean()"
      ]
    },
    {
      "type": "choice",
      "question": "如何在 pandas 的 DataFrame 对象中计算多个分位数？( )",
      "answer": "A",
      "options": [
        "df.quantiles([0.25, 0.5, 0.75])",
        "df.percentile([0.25, 0.5, 0.75])",
        "df.quantile(0.25, 0.5, 0.75)",
        "df.quantile([0.25, 0.5, 0.75])"
      ]
    },
    {
      "type": "choice",
      "question": "使用 Pandas 对 DataFrame 按'column1'列进行分组并计算每组的平均值，应该使用哪 个方法？( )",
      "answer": "A",
      "options": [
        "df.mean(groupby='column')",
        "df.groupby('column').aggregate('mean')",
        "df.groupby('column').apply('mean')",
        "df.groupby('column').mean()"
      ]
    },
    {
      "type": "choice",
      "question": "如何对 DataFrame 按'column1', 'column2'列进行分组并计算每组 column3 列的总和？ ( )",
      "answer": "C",
      "options": [
        "df.sum(groupby=['column1'， 'column2'])",
        "df.groupby(['column1'， 'column2']).agg({'column3': 'sum'})",
        "df.groupby(['column1'， 'column2']).agg('sum')",
        "df.groupby(['column1'， 'column2']).sum()"
      ]
    },
    {
      "type": "choice",
      "question": "已知员工表数据保存在 df 中，结果下表所示，按岗位统计年薪的均值的语句是：（ ）。",
      "answer": "C",
      "options": [
        "df.groupby([‘岗位’，'年薪’]).avg()",
        "df.groupby([‘岗位])['年薪].mean()",
        "df.groupby([‘岗位’]).mean()[‘年薪’]",
        "df.groupby([‘岗位’，'年薪’]).mean()"
      ]
    },
    {
      "type": "choice",
      "question": "使用 Pandas 对 DataFrame 按照 column 列分组后计算每组的最大值和最小值，应该使 用哪个方法？",
      "answer": "A",
      "options": [
        "df.max().min().groupby('column')",
        "df.groupby('column').max().min()",
        "df.groupby('column').agg({'max': 'column2', 'min': 'column2'})",
        "df.groupby('column').agg(['max', 'min'])"
      ]
    },
    {
      "type": "choice",
      "question": "下面关于 DataFrame 对象的 plot 方法的参数说明，错误的是( )。",
      "answer": "D",
      "options": [
        "若 legend 设置为 True，表示不显示图例",
        "若 subplots 设置为 True，表示有子图",
        "若 grid 设置为 True，表示有网格",
        "title 用于设置图的标题"
      ]
    },
    {
      "type": "choice",
      "question": "下面哪个方法可以绘制箱线图？( )",
      "answer": "D",
      "options": [
        "boxplot()",
        "show()",
        "subplots()",
        "plot()"
      ]
    }
  ],
  "judge": [
    {
      "type": "choice",
      "question": "已知某商品每月的销售数据如下表所示，要求绘制每月销售额的变化折线图，并设置标 题为每月销售额，正确的语句是( )。",
      "answer": "C",
      "options": [
        "df.plot(x='销售额'，y='月'，text='每月销售额')",
        "dfplot(x='月'，y='销售额'，title='每月销售额')",
        "df.plot(x='销售额'，y='月')",
        "df.plot(x='月，y='销售额')"
      ]
    },
    {
      "type": "judge",
      "question": "数据异常是指一些数据远离数据集的问题。( ）",
      "answer": true,
      "options": [
        "对",
        "错"
      ]
    },
    {
      "type": "judge",
      "question": "NumPy 中只支持使用整数索引访问元素。( )",
      "answer": false,
      "options": [
        "对",
        "错"
      ]
    },
    {
      "type": "judge",
      "question": "Series 对象和 DataFrame 对象都支持切片索引。（ )",
      "answer": true,
      "options": [
        "对",
        "错"
      ]
    },
    {
      "type": "judge",
      "question": "DataFrame 对象中每一列的数据都可以看作一-个 Series 对象。（）",
      "answer": true,
      "options": [
        "对",
        "错"
      ]
    },
    {
      "type": "judge",
      "question": "DataFrame 对象可以直接调用 dropna()方法来删除缺失值，默认 inplace 参数为 False, 删除操作直接改变原数据。（ ）",
      "answer": false,
      "options": [
        "对",
        "错"
      ]
    },
    {
      "type": "judge",
      "question": "DataFrame 对象是由行标签和数据组成的。（ ）",
      "answer": false,
      "options": [
        "对",
        "错"
      ]
    },
    {
      "type": "judge",
      "question": "Series 对象是一种二维表格型的数据结构。（ ）",
      "answer": false,
      "options": [
        "对",
        "错"
      ]
    },
    {
      "type": "judge",
      "question": "pd.to_excel()函数可以将 DataFrame 写入 Excel 文件，但不能写入 CSV 文件。（ ）",
      "answer": false,
      "options": [
        "对",
        "错"
      ]
    },
    {
      "type": "judge",
      "question": "to_excel( )是 DataFrame 对象的方法将数据保存到 Excel 中。 ( )",
      "answer": true,
      "options": [
        "对",
        "错"
      ]
    },
    {
      "type": "judge",
      "question": "CSV 文件数据的常用分隔符是“|”。 ( )",
      "answer": false,
      "options": [
        "对",
        "错"
      ]
    },
    {
      "type": "judge",
      "question": "使用 pd.read_json()函数时，可以通过 dtype 参数来指定列的数据类型。（ ）",
      "answer": true,
      "options": [
        "对",
        "错"
      ]
    },
    {
      "type": "judge",
      "question": "使用 pd.read_json()函数读取 JSON 文件时，默认包含列名作为 DataFrame 的列标题。 （ ）",
      "answer": true,
      "options": [
        "对",
        "错"
      ]
    },
    {
      "type": "judge",
      "question": "、pd.to_json()函数在写入 JSON 文件时，默认包含 DataFrame 的索引。（ ）",
      "answer": false,
      "options": [
        "对",
        "错"
      ]
    },
    {
      "type": "judge",
      "question": "在 Python 中，使用 open(file, 'r')可以打开一个 TXT 文件用于写入。",
      "answer": false,
      "options": [
        "对",
        "错"
      ]
    },
    {
      "type": "judge",
      "question": "apply()方法不能将 lambda 匿名函数作用于 DataFrame 对象的行或者列，只能应用自定 义函数。 ( )",
      "answer": false,
      "options": [
        "对",
        "错"
      ]
    },
    {
      "type": "judge",
      "question": "astype()方法可以将 pandas 的 DataFrame 对象中一列或多列数据的类型变换为指定的 数据类型，返回值为变换后的数据。（ ）",
      "answer": true,
      "options": [
        "对",
        "错"
      ]
    },
    {
      "type": "judge",
      "question": "map()方法是 DataFrame 对象的方法，其自动根据指定的变换函数遍历每一个数据，然 后返回一个数据结构为 DataFrame 对象的结果。( )",
      "answer": false,
      "options": [
        "对",
        "错"
      ]
    },
    {
      "type": "judge",
      "question": "左连接是在对两张表进行主键合并操作时，按左表的键值进行合并，保持左表的健值顺 序，如果左表的健值在右表中不存在，用 NaN 填充。（ ）",
      "answer": true,
      "options": [
        "对",
        "错"
      ]
    },
    {
      "type": "judge",
      "question": "调用 pandas 的 concat( )方法进行堆叠合并时，axis=1 表示横向堆叠合并。（ ）",
      "answer": true,
      "options": [
        "错",
        "对"
      ]
    },
    {
      "type": "judge",
      "question": "调用 to_numeric()方法进行数值类型变换，当设置参数 errors=-'coerce'时，字符串会被 变换为 NaN。 ( )",
      "answer": true,
      "options": [
        "对",
        "错"
      ]
    }
  ]
};