package ac.fon.si.nst.service.implementation;

import ac.fon.si.nst.domain.Admin;
import ac.fon.si.nst.repository.AdminRepository;
import ac.fon.si.nst.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {
    @Autowired
    AdminRepository adminRepository;

    @Override
    public Admin login(String username, String password) throws Exception {
        Admin admin = adminRepository.findByUsernameAndPassword(username, password);
        if (admin == null)
            throw new Exception("Invalid username or password.");
        return admin;
    }
}
