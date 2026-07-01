DROP POLICY IF EXISTS "Anyone can submit an enquiry" ON public.contact_enquiries;
CREATE POLICY "Anyone can submit an enquiry"
ON public.contact_enquiries
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(btrim(name)) BETWEEN 1 AND 100
  AND length(btrim(business)) BETWEEN 1 AND 100
  AND length(btrim(email)) BETWEEN 3 AND 255
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND length(btrim(phone)) BETWEEN 7 AND 20
  AND length(btrim(need)) BETWEEN 1 AND 100
);