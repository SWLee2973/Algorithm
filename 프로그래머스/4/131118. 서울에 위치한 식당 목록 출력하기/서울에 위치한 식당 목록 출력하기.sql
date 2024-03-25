-- 코드를 입력하세요
SELECT ri.rest_id as rest_id, 
       ri.rest_name as rest_name, 
       ri.food_type as food_type, 
       ri.favorites as favorites, 
       ri.address as address, 
       round(avg(rr.review_score), 2) as score
from rest_info ri, rest_review rr
where ri.rest_id = rr.rest_id
and ri.address like '서울%'
group by ri.rest_id, ri.rest_name, ri.food_type, ri.favorites, ri.address
order by score desc, ri.favorites desc