var tags = ["_setup", "record-changes", "_truncate"]
var specs = [{"path":"specs/assert/change.html","name":"変化したレコード数のアサート","scenarios":[{"name":"指定したテーブルで変更されたレコード数をアサートする","tags":["record-changes","_setup"]},{"name":"指定したテーブルで削除されたレコード数をアサートする","tags":["record-changes","_setup"]},{"name":"指定したテーブルで作成されたレコード数をアサートする","tags":["record-changes","_setup"]},{"name":"Stepによる記録開始タイミングの制御","tags":["_setup"]}]},{"path":"specs/assert/exist.html","name":"存在のアサート","scenarios":[{"name":"存在しないことをアサートする","tags":["_setup"]},{"name":"条件文で取得したレコードが存在しない","tags":["_setup"]}]},{"path":"specs/assert/value.html","name":"テーブルの値のアサート","scenarios":[{"name":"カラムの値を指定して、文字列をアサートする","tags":["_setup"]},{"name":"カラムの値を指定して、整数をアサートする","tags":["_setup"]},{"name":"カラムの値を指定して、小数をアサートする","tags":["_setup"]},{"name":"カラムの値を指定して、日付をアサートする","tags":["_setup"]},{"name":"カラムの値を指定して、日時をアサートする","tags":["_setup"]},{"name":"カラムの値を指定して、真偽値をアサートする","tags":["_setup"]},{"name":"カラムの値を指定して、NULLをアサートする","tags":["_setup"]},{"name":"条件文で取得したレコードの、文字列のフィールドをアサートする","tags":["_setup"]},{"name":"条件文で取得したレコードの、整数のフィールドをアサートする","tags":["_setup"]},{"name":"条件文で取得したレコードの、小数のフィールドをアサートする","tags":["_setup"]},{"name":"条件文で取得したレコードの、日付のフィールドをアサートする","tags":["_setup"]},{"name":"条件文で取得したレコードの、日時のフィールドをアサートする","tags":["_setup"]},{"name":"条件文で取得したレコードの、NULLのフィールドをアサートする","tags":["_setup"]},{"name":"条件文で取得したレコードの、文字列のフィールドを全体マッチの正規表現でアサートする","tags":["_setup"]}]},{"path":"specs/setup.html","name":"playtest-dbのセットアップ関連のテスト","scenarios":[{"name":"CSVファイルからセットアップする","tags":["_truncate"]},{"name":"truncateする","tags":["_truncate"]},{"name":"1レコードを挿入する","tags":["_truncate"]},{"name":"1レコードを削除する","tags":["_truncate"]}]}]