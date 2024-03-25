-- 코드를 입력하세요
SELECT member_id, member_name, gender, to_char(date_of_birth, 'yyyy-mm-dd')
from member_profile
where tlno is not null
and substr(date_of_birth, 4, 3) = 'MAR'
and gender = 'W'
order by member_id;