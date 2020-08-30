package ac.fon.si.nst.service;

import ac.fon.si.nst.domain.Admin;

public interface AdminService {
    Admin login(String username, String password) throws Exception;
}
