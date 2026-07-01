GRANT INSERT ON public.contact_enquiries TO anon, authenticated;
CREATE POLICY "Anyone can submit an enquiry" ON public.contact_enquiries FOR INSERT TO anon, authenticated WITH CHECK (true);